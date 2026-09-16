import Link from 'next/link';
import Image from 'next/image';
import DirectoryRecommendation from '@/app/components/DirectoryRecommendation';
import { permanentRedirect } from 'next/navigation';
import KeywordPageCommunity from '@/app/components/KeywordPageCommunity';
import ServerLogo from '@/app/components/ServerLogo';
import TrustedExternalLink from '@/app/components/TrustedExternalLink';
import { buildServerSlug } from '@/lib/server-paths';
import { buildCuratedJsonLd } from '@/lib/curated-pages';
import { fetchDirectoryServers } from '@/lib/directory-data';
import { buildCuratedCoda, buildDeepDiveSections } from '@/lib/deep-dive-pages';
import { deriveServerIdentity } from '@/lib/server-identity';
import { getServerExcerpt, getServerExcerptSources, isGenericServerCopy } from '@/lib/server-excerpts';
import { getServerResearchProfile } from '@/lib/server-research-profiles';

const literalKeys = new Set(['href', 'src', 'url', 'path', 'canonicalPath']);
const displayReplacements = [
  [/still needs an official, owner-confirmed, or carefully attributed community source for this field\./gi, 'has no verified source mapped for this field yet. Add the official website, rules page, Discord, or a dated community record to complete it.'],
  [/Official download source pending\./gi, 'No verified download or account path is mapped yet. Use the official site or a claimed owner link before installing anything.'],
  [/Preserve the exact ([^.]+?) first-session steps from the official site or an owner-confirmed guide\./gi, 'Capture the actual first-session flow from the official site or a verified community guide, then keep the source link visible.'],
  [/Mark this ([^.]+?) profile verified only after every required field has dependable evidence\./gi, 'Treat this profile as verified only when the key fields carry dependable evidence.'],
  [/What the record still needs/gi, 'Open fields to document'],
  [/Details still needed/gi, 'Open fields'],
  [/Still needed:/gi, 'Open fields:'],
  [/Source Notes/gi, 'Source trail'],
  [/Research Notes/gi, 'Source trail'],
  [/Media Leads/gi, 'Media and screenshots'],
  [/Reference Sources/gi, 'Source trail'],
  [/Official Access/gi, 'Official links'],
  [/Profile confidence/gi, 'Source coverage'],
  [/What is known about ([^?]+?) and what still needs proof/gi, 'What is known now'],
];

function sanitizeString(value) {
  return displayReplacements.reduce((result, [pattern, replacement]) => result.replace(pattern, replacement), value);
}

function sanitizeDisplayCopy(value, key = '') {
  if (typeof value === 'string') return sanitizeString(value);
  if (Array.isArray(value)) return value.map((entry) => sanitizeDisplayCopy(entry));
  if (!value || typeof value !== 'object') return value;

  return Object.fromEntries(
    Object.entries(value).map(([entryKey, entryValue]) => [
      entryKey,
      literalKeys.has(entryKey) ? entryValue : sanitizeDisplayCopy(entryValue, entryKey),
    ]),
  );
}

function createQueryHref(query) {
  return `/?search=${encodeURIComponent(query)}`;
}

function createInternalTopicHref(query) {
  return `/topics/${String(query || '')
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')}`;
}

function normalizeSourceLinks(page) {
  const rawLinks = Array.isArray(page?.sourceLinks)
    ? page.sourceLinks
    : Array.isArray(page?.research_sources)
      ? page.research_sources.map((source) => ({
          href: source?.href || source?.url || '',
          label: source?.label || source?.title || source?.href || source?.url || '',
          note: source?.note || source?.use || '',
          type: source?.type || 'reference',
        }))
      : [];

  return rawLinks.filter((link) => link && link.href && link.label);
}

function isPublishableServerSource(source) {
  try {
    const url = new URL(source?.href || source?.url || '');
    const host = url.hostname.replace(/^www\./, '').toLowerCase();
    if (host === 'opentibiaservers.com' || host === 'google.com') return false;
    return /^https?:$/.test(url.protocol);
  } catch {
    return false;
  }
}

function factValue(page, label, fallback) {
  return (page.facts || []).find((fact) => fact?.label === label)?.value || fallback;
}

function buildDefaultServerFaqs(page) {
  const name = page.primaryKeyword;
  const host = factValue(page, 'Listed host', 'the listed connection address');
  const profile = factValue(page, 'EXP / PvP / version', 'rates, PvP rules, and client version shown in the reference box');
  const activity = factValue(page, 'Players snapshot', 'the latest directory snapshot');
  return [
    {
      question: `What is ${name}?`,
      answer: `${name} is an independently operated Open Tibia server represented in this directory by ${host}. Its page combines the latest listing snapshot with operator-controlled information and clearly marked research gaps.`,
    },
    {
      question: `What client, rates, and PvP type does ${name} use?`,
      answer: `The captured profile records ${profile}. Confirm these settings on the official server website before starting because worlds, seasons, and rate stages can change.`,
    },
    {
      question: `How active is ${name}?`,
      answer: `The current reference point is ${activity}. Treat that number as a dated snapshot and compare it with several times of day, recent deaths, guild activity, market movement, and the server's community channels.`,
    },
    {
      question: `Where should I download the ${name} client?`,
      answer: `Use only the operator-controlled website or launcher linked from this profile. Avoid third-party mirrors, confirm the required client version, and check the server's current rules and support channel before installing anything.`,
    },
    {
      question: `How can I decide whether ${name} suits me?`,
      answer: `Compare its version, progression speed, PvP rules, region, reset policy, automation rules, activity pattern, and documented systems with the time and play style you want to commit.`,
    },
  ];
}

function normalizeWikiSourceCandidates(wikiDepth) {
  return Array.isArray(wikiDepth?.sourceCandidates)
    ? wikiDepth.sourceCandidates.filter((source) => source && source.href && source.label)
    : [];
}

function buildInternalLinks(page) {
  const links = [
    { href: '/', label: 'Open Tibia server directory' },
    { href: '/resources', label: 'Open Tibia tools and resources' },
    { href: '/community_archive', label: 'community_archive server launch guide' },
  ];

  for (const query of page.relatedServerQueries || []) {
    const href = createInternalTopicHref(query);
    if (href.length > 1 && !links.some((link) => link.href === href)) {
      links.push({ href, label: query });
    }
    if (links.length >= 8) break;
  }

  return links;
}

export default async function CuratedGuideArticle({ page: sourcePage }) {
  if (sourcePage?.type === 'server') {
    const listedHostValue = (sourcePage.facts || []).find((fact) => fact?.label === 'Listed host')?.value;
    const listedHost = /^(pending|unknown|n\/?a|-)$/i.test(listedHostValue || '') ? '' : listedHostValue;
    const identity = deriveServerIdentity({ ...sourcePage, host: sourcePage.host || sourcePage.ip || listedHost });
    const canonicalPath = identity.slug ? `/servers/${identity.slug}` : null;
    if (canonicalPath && sourcePage.path !== canonicalPath) permanentRedirect(canonicalPath);
  }

  const page = sanitizeDisplayCopy(sourcePage);
  const isServerProfile = page.type === 'server';
  const researchProfile = isServerProfile ? getServerResearchProfile(page.slug) : null;
  const profileExcerpt = isServerProfile ? getServerExcerpt(page) : null;
  const profileSources = isServerProfile ? getServerExcerptSources(page).filter(isPublishableServerSource) : [];
  const communityExperiences = !isServerProfile && Array.isArray(page.community_excerpts)
    ? page.community_excerpts.filter((post) => post?.author && post?.excerpt).slice(0, 3)
    : [];
  const sourceFeatures = isServerProfile && Array.isArray(page.source_features)
    ? page.source_features.filter((feature) => typeof feature === 'string' && feature.trim()).slice(0, 10)
    : [];
  const profileDek = isServerProfile && (isGenericServerCopy(page.dek) || page.dek === profileExcerpt) ? null : page.dek;
  const profileOverview = isServerProfile && (
    !page.overview ||
    isGenericServerCopy(page.overview) ||
    page.overview === profileExcerpt
  ) ? null : page.overview;
  const sourceLinks = normalizeSourceLinks(page).filter((source) => !isServerProfile || isPublishableServerSource(source));
  const cta = page.cta && page.cta.href
    ? page.cta
    : { href: '/', label: 'Browse Open Tibia servers' };
  const facts = Array.isArray(page.facts) ? page.facts.filter(Boolean) : [];
  const officialAccess = Array.isArray(page.officialAccess)
    ? page.officialAccess.filter((link) => link && link.href && link.label)
    : [];
  const sections = (Array.isArray(page.sections) ? page.sections : [])
    .filter(Boolean)
    .map((section) => ({
      ...section,
      body: (Array.isArray(section.body) ? section.body : [])
        .filter(Boolean)
        .filter((paragraph) => !isServerProfile || (!isGenericServerCopy(paragraph) && paragraph !== profileExcerpt)),
    }))
    .filter((section) => section.body.length);
  const suppliedFaqs = (Array.isArray(page.faqs) ? page.faqs : Array.isArray(page.faq_items) ? page.faq_items : [])
    .filter(Boolean)
    .filter((faq) => !isServerProfile || (!isGenericServerCopy(faq.answer) && faq.answer !== profileExcerpt));
  const faqs = suppliedFaqs.length || !isServerProfile ? suppliedFaqs : buildDefaultServerFaqs(page);
  const glossary = isServerProfile ? [] : (Array.isArray(page.glossary) ? page.glossary.filter(Boolean) : []);
  const researchNotes = (Array.isArray(page.researchNotes) ? page.researchNotes : [])
    .filter(Boolean)
    .filter((note) => !isServerProfile || !isGenericServerCopy(note.value));
  const mediaLeads = Array.isArray(page.mediaLeads) ? page.mediaLeads.filter((lead) => lead && lead.href && lead.label) : [];
  const evergreenAngles = (Array.isArray(page.evergreenAngles) ? page.evergreenAngles : [])
    .filter(Boolean)
    .filter((angle) => !isServerProfile || !isGenericServerCopy(angle));
  const infobox = Array.isArray(page.infobox) ? page.infobox.filter(Boolean) : [];
  const timeline = (Array.isArray(page.timeline) ? page.timeline : [])
    .filter(Boolean)
    .filter((event) => !isServerProfile || !isGenericServerCopy(`${event.title || ''} ${event.text || ''}`));
  const relatedServerQueries = Array.isArray(page.relatedServerQueries) ? page.relatedServerQueries : [];

  const directoryData = await fetchDirectoryServers({
    page: 1,
    pageSize: 8,
    search: page.primaryKeyword,
    onlineOnly: false,
  });
  const jsonLd = buildCuratedJsonLd(page);
  const deepDiveSections = buildDeepDiveSections(page);
  const curatedCoda = buildCuratedCoda(page);
  const internalLinks = buildInternalLinks(page);
  const wikiDepth = page.wikiDepth || null;
  const wikiSourceCandidates = normalizeWikiSourceCandidates(wikiDepth)
    .filter((source) => !isServerProfile || isPublishableServerSource(source));
  const gameplayGuide = Array.isArray(wikiDepth?.gameplayGuide) ? wikiDepth.gameplayGuide.filter(Boolean) : [];
  const wikiSystems = wikiDepth && typeof wikiDepth.systems === 'object' && wikiDepth.systems ? wikiDepth.systems : {};
  const editorialQueue = Array.isArray(wikiDepth?.editorialQueue) ? wikiDepth.editorialQueue.filter(Boolean) : [];
  const curatedCodaBody = Array.isArray(curatedCoda?.body) ? curatedCoda.body.filter(Boolean) : [];
  const directoryServers = Array.isArray(directoryData?.servers) ? directoryData.servers.filter(Boolean) : [];

  return (
    <main className={isServerProfile ? 'cyntara-wiki min-h-screen' : 'min-h-screen bg-white text-black'}>
      {jsonLd.map((entry, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}

      <section className={isServerProfile ? 'cyntara-wiki__hero border-b border-black bg-white text-black' : 'border-b border-black bg-white text-black'}>
        <div className={isServerProfile ? 'cyntara-wiki__header mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[1fr_320px] lg:items-start' : 'mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[1fr_320px] lg:items-start'}>
          <div className="pb-6">
            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
              <Link href="/" className="font-semibold text-black">
                Open Tibia Servers
              </Link>
              <span className="text-black">/</span>
              <span className="text-black">{page.primaryKeyword}</span>
            </div>
            <h1 className="mb-4 max-w-4xl text-4xl font-bold leading-tight text-black md:text-6xl">
              {page.h1}
            </h1>
            {isServerProfile ? <small className="cyntara-wiki__attribution">From OpenTibiaServers Wiki, the primary open tibia server directory</small> : null}
            {profileDek ? (
              <p className="max-w-3xl text-lg leading-8 text-black">
                {profileDek}
              </p>
            ) : null}
            {isServerProfile ? (
              <p className="mt-5 max-w-3xl text-base leading-8 text-black">
                <strong><em><u>{page.primaryKeyword}</u></em></strong> is documented here as a player-focused Open Tibia server guide. The page separates current listing facts, operator-controlled links, archived claims, and details that still require confirmation.
              </p>
            ) : null}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={cta.href}
                className="rounded border border-black bg-white px-5 py-3 text-sm font-bold text-black hover:bg-gray-100 hover:no-underline"
              >
                {cta.label}
              </Link>
              <Link
                href="/submit-server"
                className="rounded border border-black bg-white px-5 py-3 text-sm font-bold text-black hover:bg-gray-100 hover:no-underline"
              >
                Claim or Submit a Listing
              </Link>
            </div>
          </div>

          <aside className="space-y-4">
            {isServerProfile ? <ServerLogo server={page} size="profile" /> : null}
            {page.heroImage ? (
              <figure className="overflow-hidden border border-black bg-white">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={page.heroImage.src}
                    alt={page.heroImage.alt}
                    fill
                    priority={page.slug === 'antica'}
                    sizes="(max-width: 1024px) 100vw, 320px"
                    className="object-cover grayscale"
                  />
                </div>
                <figcaption className="border-t border-black px-3 py-2 text-xs font-semibold text-black">
                  {page.heroImage.alt}
                </figcaption>
              </figure>
            ) : null}

            <div className="rounded border border-black bg-white p-5">
            <h2 className="mb-4 text-base font-bold text-black">Quick Facts</h2>
            <dl className="space-y-4">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs font-bold uppercase tracking-wide text-black">{fact.label}</dt>
                  <dd className="mt-1 text-sm font-semibold text-black">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-xs text-black">Updated {page.updatedAt}</p>
            {wikiDepth ? (
              <p className="mt-2 text-xs font-semibold text-black">Profile depth: {wikiDepth.statusLabel}</p>
            ) : null}
            </div>
          </aside>
        </div>
      </section>

      <section className={isServerProfile ? 'cyntara-wiki__grid mx-auto max-w-6xl gap-8 px-6 py-8' : 'mx-auto grid max-w-6xl gap-8 px-6 py-8 lg:grid-cols-[minmax(0,1fr)_300px]'}>
        <article className={isServerProfile ? 'cyntara-wiki__content space-y-8' : 'space-y-8'}>
          {isServerProfile ? (
            <nav className="rounded border border-gray-300 bg-gray-50 p-5" aria-label={`${page.primaryKeyword} guide contents`}>
              <p className="text-xs font-bold uppercase tracking-widest text-black">Contents</p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                <a href="#server-evidence">Known facts</a>
                <a href="#server-systems">Rates and systems</a>
                <a href="#server-player-guide">Player guide</a>
                <a href="#server-faq">FAQ</a>
                <Link href="/">Directory</Link>
                <Link href="/knowledge">Knowledge guides</Link>
                <Link href="/resources">Tools and resources</Link>
              </div>
            </nav>
          ) : null}

          {profileExcerpt ? (
            <section id="server-evidence" className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-800">Source-backed overview</p>
              <h2 className="text-2xl font-bold text-gray-950">What attributed sources say</h2>
              <p className="mt-3 text-base leading-8 text-gray-800">{profileExcerpt}</p>
              {profileSources.length ? (
                <div className="mt-5 flex flex-wrap gap-3">
                  {profileSources.map((source) => (
                    <TrustedExternalLink
                      key={source.url}
                      href={source.url}
                      label={source.label}
                      className="inline-flex rounded border border-emerald-800 bg-white px-3 py-2 text-sm font-bold text-emerald-900 hover:no-underline"
                    />
                  ))}
                </div>
              ) : null}
              {sourceFeatures.length ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {sourceFeatures.map((feature) => (
                    <span key={feature} className="rounded border border-emerald-200 bg-white px-2 py-1 text-xs font-semibold text-emerald-950">
                      {feature}
                    </span>
                  ))}
                </div>
              ) : null}
            </section>
          ) : null}

          {communityExperiences.length ? (
            <section className="border-b border-gray-200 pb-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-black">Attributed discussion</p>
              <h2 className="mb-2 text-2xl font-bold text-black">What community_archive users posted</h2>
              <p className="mb-5 text-sm leading-7 text-gray-700">
                Short excerpts from people other than the thread owner, with direct links back to the original context.
              </p>
              <div className="space-y-3">
                {communityExperiences.map((post, index) => (
                  <blockquote key={`${post.source_url || post.author}-${index}`} className="rounded border border-gray-200 bg-gray-50 p-4">
                    <p className="text-sm leading-7 text-gray-900">“{post.excerpt}”</p>
                    <footer className="mt-3 flex flex-wrap items-center gap-2 text-xs font-semibold text-gray-600">
                      <span>{post.author}</span>
                      {post.posted_at_label ? <span>· {post.posted_at_label}</span> : null}
                      {post.source_url ? (
                        <TrustedExternalLink
                          href={post.source_url}
                          label="View original post"
                          className="font-bold text-black underline"
                        />
                      ) : null}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </section>
          ) : null}

          {profileOverview ? (
            <section className="border-b border-gray-200 pb-8">
              <p className="text-xl leading-9 text-gray-800">{profileOverview}</p>
            </section>
          ) : null}

          {researchProfile ? (
            <section className="border-b border-gray-200 pb-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-black">Independent research</p>
              <h2 className="mb-4 text-2xl font-bold text-black">{page.primaryKeyword} Wiki Profile</h2>
              <p className="text-base leading-8 text-black">{researchProfile.summary}</p>
              <ul className="mt-4 space-y-2">
                {researchProfile.features.map((feature) => <li key={feature} className="text-sm leading-7 text-black">{feature}</li>)}
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                {researchProfile.sources.map((source) => (
                  <TrustedExternalLink key={source.href} href={source.href} label={source.label} className="inline-flex rounded border border-black bg-white px-3 py-2 text-sm font-bold text-black hover:no-underline" />
                ))}
              </div>
            </section>
          ) : null}

          {wikiDepth ? (
            <section id="server-systems" className="border-b border-gray-200 pb-8">
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-black">Source coverage</p>
                  <h2 className="mb-4 text-2xl font-bold text-gray-950">
                  What is known about {page.primaryKeyword}
                  </h2>
                  <div className="mb-5 rounded border border-black bg-white p-4">
                <h3 className="text-base font-bold text-black">{wikiDepth.statusLabel}</h3>
                <p className="mt-2 text-sm leading-7 text-black">
                  {wikiDepth.status === 'directory-only'
                    ? `The public directory gives ${page.primaryKeyword} a verifiable starting point, not a finished biography. Official links, owner confirmation, and dated community evidence still need to be gathered before uncertain gameplay claims become facts.`
                    : `${page.primaryKeyword} already has source-backed detail, but some parts of the world remain undocumented. Those gaps stay visible until an official source, verified owner, or dated player contribution can support them.`}
                </p>
                {wikiDepth.missingFields?.length ? (
                  <p className="mt-3 text-sm font-semibold text-black">
                    Open fields: {wikiDepth.missingFields.join(', ')}
                  </p>
                ) : null}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {gameplayGuide.map((entry) => (
                    <div key={entry.heading} className="rounded border border-black bg-white p-4">
                    <h3 className="text-base font-bold text-black">{entry.heading}</h3>
                    <p className="mt-2 text-sm leading-7 text-black">{entry.body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {Object.entries(wikiSystems).map(([key, values]) => (
                  <div key={key} className="rounded border border-black bg-white p-4">
                    <h3 className="text-base font-bold capitalize text-black">{key.replace(/([A-Z])/g, ' $1')}</h3>
                    <ul className="mt-3 space-y-2">
                      {(Array.isArray(values) ? values : []).filter(Boolean).map((value) => (
                        <li key={value} className="text-sm leading-6 text-black">
                          {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded border border-gray-200 bg-white p-4">
                <h3 className="text-base font-bold text-black">Official links and source trail</h3>
                <p className="mt-2 text-sm leading-7 text-black">{wikiDepth.sourcePolicy}</p>
                <div className="mt-4 grid gap-3">
                  {wikiSourceCandidates.map((source) => (
                    <TrustedExternalLink
                      key={`${source.type}-${source.href}`}
                      href={source.href}
                      label={source.label}
                      note={source.use}
                      allowUntrusted={source.type === 'wiki_search'}
                      className="rounded border border-black bg-white p-4 hover:no-underline"
                    />
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded border border-gray-200 bg-white p-4">
                <h3 className="text-base font-bold text-black">What to add next</h3>
                <ul className="mt-3 space-y-2">
                  {editorialQueue.map((item) => (
                    <li key={item} className="text-sm leading-6 text-black">{item}</li>
                  ))}
                </ul>
              </div>
            </section>
          ) : null}

          {timeline.length ? (
            <section className="border-b border-gray-200 pb-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-black">Timeline</p>
              <h2 className="mb-5 text-2xl font-bold text-black">{page.primaryKeyword} Historical Timeline</h2>
              <div className="space-y-4">
                {timeline.map((event) => (
                  <div key={`${event.date}-${event.title}`} className="grid gap-2 border-l-2 border-gray-300 pl-4 sm:grid-cols-[120px_1fr] sm:border-l-0 sm:pl-0">
                    <div className="text-sm font-bold text-black">{event.date}</div>
                    <div>
                      <h3 className="text-base font-bold text-black">{event.title}</h3>
                      <p className="mt-1 text-sm leading-7 text-black">{event.text}</p>
                      {event.sourceHref ? (
                        <TrustedExternalLink
                          href={event.sourceHref}
                          label={`Source: ${event.sourceLabel || 'View supporting record'}`}
                          className="mt-2 inline-flex text-xs font-bold text-black underline"
                        />
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {officialAccess.length ? (
            <section className="border-b border-gray-200 pb-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-black">Official links</p>
              <h2 className="mb-4 text-2xl font-bold text-black">
                {page.primaryKeyword} Official Source and Downloads
              </h2>
              <p className="mb-4 text-base leading-8 text-black">
                {isServerProfile
                  ? 'These are the official and community pages used to support this server profile. Check their dates when comparing launch information, rules, downloads, and current systems.'
                  : 'These links are limited to official project repositories, release channels, publisher domains, or moderated historical references. Historical automation entries are preserved for context and do not endorse running old binaries.'}
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                {officialAccess.map((entry) => (
                  <TrustedExternalLink
                    key={entry.href}
                    href={entry.href}
                    label={entry.label}
                    note={entry.note}
                    kind={entry.kind || 'reference'}
                    className="rounded border border-black bg-white p-4 hover:no-underline"
                  />
                ))}
              </div>
            </section>
          ) : null}

          {sections.map((section) => (
            <section key={section.heading} className="border-b border-gray-200 pb-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-black">{section.eyebrow}</p>
              <h2 className="mb-4 text-2xl font-bold text-black">{section.heading}</h2>
              <div className="space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-black">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}

          {faqs.length ? (
            <section id="server-faq" className="border-b border-gray-200 pb-8">
                <h2 className="mb-4 text-2xl font-bold text-black">{page.primaryKeyword} FAQ</h2>
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <details key={faq.question} className="rounded border border-black bg-white p-4">
                      <summary className="cursor-pointer text-base font-bold text-black">{faq.question}</summary>
                      <p className="mt-3 text-sm leading-7 text-black">{faq.answer}</p>
                    </details>
                  ))}
              </div>
            </section>
          ) : null}

          {glossary.length ? (
            <section className="border-b border-gray-200 pb-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-black">Glossary</p>
              <h2 className="mb-4 text-2xl font-bold text-black">Terms Players Should Know</h2>
              <dl className="grid gap-4">
                {glossary.map((entry) => (
                  <div key={entry.term} className="rounded border border-black bg-white p-4">
                    <dt className="text-base font-bold text-black">{entry.term}</dt>
                    <dd className="mt-2 text-sm leading-7 text-black">{entry.definition}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}

          {researchNotes.length ? (
            <section className="border-b border-gray-200 pb-8">
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-black">
                  {page.type === 'resource' ? 'Evidence Notes' : 'Source trail'}
                </p>
                <h2 className="mb-4 text-2xl font-bold text-black">
                  {page.type === 'resource' ? 'How the Historical Record Was Verified' : 'What Public Sources Already Tell Us'}
                </h2>
                <div className="grid gap-4">
                  {researchNotes.map((note) => (
                    <div key={note.label} className="rounded border border-black bg-white p-4">
                      <h3 className="text-base font-bold text-black">{note.label}</h3>
                      <p className="mt-2 text-sm leading-7 text-black">{note.value}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {mediaLeads.length ? (
            <section className="border-b border-gray-200 pb-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-black">Media and screenshots</p>
              <h2 className="mb-4 text-2xl font-bold text-black">Public Screenshot and Media Sources</h2>
              <p className="mb-4 text-base leading-8 text-black">
                These are source leads for real screenshots and community media. We link to them for attribution and verification; files should only be mirrored locally when the server owner, source license, or contributor permission allows it.
              </p>
              <div className="grid gap-3">
                {mediaLeads.map((lead) => (
                  <TrustedExternalLink
                    key={lead.href}
                    href={lead.href}
                    label={lead.label}
                    note={lead.note}
                    className="rounded border border-black bg-white p-4 hover:no-underline"
                  />
                ))}
              </div>
            </section>
          ) : null}

          {deepDiveSections.length ? (
            <section id="server-player-guide" className="border-b border-gray-200 pb-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-black">Player&apos;s view</p>
              <h2 className="mb-4 text-2xl font-bold text-black">Inside {page.primaryKeyword}: pace, trust, and community</h2>
              <p className="mb-5 text-base leading-8 text-black">
                A listing can tell you that a world is online. These chapters ask the harder questions: what the first evening may feel like, which evidence deserves trust, who is likely to stay, and what memories the community has yet to preserve.
              </p>
              <div className="space-y-8">
                {deepDiveSections.map((section, index) => (
                  <section key={`${section.heading}-${index}`} className="border-l-2 border-gray-300 pl-5">
                    <span className="block text-xs font-bold uppercase tracking-widest text-black">{section.eyebrow}</span>
                    <h3 className="mt-1 text-xl font-bold text-black">{section.heading}</h3>
                    <div className="mt-4 space-y-4">
                      {(Array.isArray(section.body) ? section.body : []).filter(Boolean).map((paragraph) => (
                        <p key={paragraph} className="text-base leading-8 text-black">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </section>
          ) : null}

          {curatedCodaBody.length ? <section className="border-b border-gray-200 pb-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-black">{curatedCoda.eyebrow}</p>
            <h2 className="mb-4 text-2xl font-bold text-black">{curatedCoda.heading}</h2>
            <div className="space-y-4">
              {curatedCodaBody.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-black">{paragraph}</p>
              ))}
            </div>
          </section> : null}

          {isServerProfile ? <DirectoryRecommendation /> : null}

          {directoryServers.length ? (
            <section className="pb-8">
                <h2 className="mb-4 text-2xl font-bold text-black">Matching Live Listings</h2>
                <div className="grid gap-3">
                  {directoryServers.map((server) => (
                    <Link
                      key={server.id || `${server.name}-${server.ip}`}
                      href={`/servers/${buildServerSlug(server)}`}
                      className="rounded border border-black bg-white p-4 hover:no-underline"
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className="text-base font-bold text-black">{server.name}</h3>
                          <p className="text-sm text-black">
                            {server.version || 'Unknown client'} - {server.world_type || 'World type pending'} - {server.location || 'Location pending'}
                          </p>
                        </div>
                        <div className="text-sm font-bold text-black">
                          {Number(server.players_online || 0).toLocaleString()} online
                        </div>
                      </div>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </article>

        <aside className={isServerProfile ? 'cyntara-wiki__sidebar space-y-5' : 'space-y-5'}>
          {infobox.length ? (
            <div className="rounded border border-gray-200 bg-white p-5">
              <h2 className="mb-3 text-base font-bold text-black">Reference Box</h2>
              <dl className="space-y-3">
                {infobox.map((item) => (
                  <div key={item.label}>
                    <dt className="text-xs font-bold uppercase tracking-wide text-black">{item.label}</dt>
                    <dd className="mt-1 text-sm font-semibold text-black">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ) : null}

          {evergreenAngles.length ? (
            <div className="rounded border border-gray-200 bg-white p-5">
              <h2 className="mb-3 text-base font-bold text-black">Why This Page Exists</h2>
              <ul className="space-y-3">
                {evergreenAngles.map((angle) => (
                  <li key={angle} className="text-sm leading-6 text-black">
                    {angle}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="rounded border border-gray-200 bg-white p-5">
            <h2 className="mb-3 text-base font-bold text-black">Related Directory Pages</h2>
            <div className="flex flex-wrap gap-2">
              {internalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded border border-gray-200 bg-white p-5">
            <h2 className="mb-3 text-base font-bold text-black">Search These Terms</h2>
            <div className="flex flex-wrap gap-2">
              {relatedServerQueries.map((query) => (
                <Link
                  key={query}
                  href={createQueryHref(query)}
                  className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline"
                >
                  {query}
                </Link>
              ))}
            </div>
          </div>

          {sourceLinks.length ? <div className="rounded border border-gray-200 bg-white p-5">
            <h2 className="mb-3 text-base font-bold text-black">Source trail</h2>
            <ul className="space-y-3">
              {sourceLinks.map((source) => (
                <li key={source.href}>
                  <TrustedExternalLink
                    href={source.href}
                    label={source.label}
                    className="text-sm font-semibold text-black"
                  />
                </li>
              ))}
            </ul>
          </div> : null}
        </aside>
      </section>

      <KeywordPageCommunity pageSlug={page.slug} keyword={page.primaryKeyword} />
    </main>
  );
}
