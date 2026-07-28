import Link from 'next/link';
import Image from 'next/image';
import KeywordPageCommunity from '@/app/components/KeywordPageCommunity';
import TrustedExternalLink from '@/app/components/TrustedExternalLink';
import { buildServerSlug } from '@/lib/server-paths';
import { buildCuratedJsonLd } from '@/lib/curated-pages';
import { fetchDirectoryServers } from '@/lib/directory-data';
import { buildDeepDiveSections, estimateCuratedPageWords } from '@/lib/deep-dive-pages';

function createQueryHref(query) {
  return `/?search=${encodeURIComponent(query)}`;
}

function createInternalTopicHref(query) {
  return `/${String(query || '')
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')}`;
}

function buildInternalLinks(page) {
  const links = [
    { href: '/', label: 'Open Tibia server directory' },
    { href: '/resources', label: 'Open Tibia tools and resources' },
    { href: '/otland', label: 'OTLand server launch guide' },
    { href: '/community', label: 'Open Tibia community boards' },
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

export default async function CuratedGuideArticle({ page }) {
  const directoryData = await fetchDirectoryServers({
    page: 1,
    pageSize: 8,
    search: page.primaryKeyword,
    onlineOnly: false,
  });
  const jsonLd = buildCuratedJsonLd(page);
  const deepDiveSections = buildDeepDiveSections(page);
  const estimatedWords = estimateCuratedPageWords(page);
  const internalLinks = buildInternalLinks(page);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-950">
      {jsonLd.map((entry, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}

      <section className="relative overflow-hidden border-b border-gray-200 bg-gray-950 text-white">
        {page.heroImage ? (
          <Image
            src={page.heroImage.src}
            alt={page.heroImage.alt}
            fill
            priority={page.slug === 'antica'}
            sizes="100vw"
            className="object-cover"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/75 to-gray-950/25" />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:min-h-[520px] lg:grid-cols-[1fr_320px] lg:items-end">
          <div className="pb-6">
            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
              <Link href="/" className="font-semibold text-white">
                Open Tibia Servers
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-200">{page.primaryKeyword}</span>
            </div>
            <h1 className="mb-4 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
              {page.h1}
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-gray-100">
              {page.dek}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={page.cta.href}
                className="rounded border border-white bg-white px-5 py-3 text-sm font-bold text-gray-950 hover:bg-gray-100 hover:no-underline"
              >
                {page.cta.label}
              </Link>
              <Link
                href="/submit-server"
                className="rounded border border-white/60 bg-gray-950/30 px-5 py-3 text-sm font-bold text-white hover:bg-gray-950/60 hover:no-underline"
              >
                Claim or Submit a Listing
              </Link>
            </div>
          </div>

          <aside className="rounded border border-white/20 bg-gray-950/65 p-5 backdrop-blur">
            <h2 className="mb-4 text-base font-bold text-white">Quick Facts</h2>
            <dl className="space-y-4">
              {page.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs font-bold uppercase tracking-wide text-gray-300">{fact.label}</dt>
                  <dd className="mt-1 text-sm font-semibold text-white">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-xs text-gray-300">Updated {page.updatedAt}</p>
            {page.type === 'server' ? (
              <p className="mt-2 text-xs text-gray-300">Estimated depth: {estimatedWords.toLocaleString()} words</p>
            ) : null}
          </aside>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-8 lg:grid-cols-[minmax(0,1fr)_300px]">
        <article className="space-y-8">
          {page.overview ? (
            <section className="border-b border-gray-200 pb-8">
              <p className="text-xl leading-9 text-gray-800">{page.overview}</p>
            </section>
          ) : null}

          {page.timeline?.length ? (
            <section className="border-b border-gray-200 pb-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">Timeline</p>
              <h2 className="mb-5 text-2xl font-bold text-gray-950">{page.primaryKeyword} Historical Timeline</h2>
              <div className="space-y-4">
                {page.timeline.map((event) => (
                  <div key={`${event.date}-${event.title}`} className="grid gap-2 border-l-2 border-gray-300 pl-4 sm:grid-cols-[120px_1fr] sm:border-l-0 sm:pl-0">
                    <div className="text-sm font-bold text-gray-950">{event.date}</div>
                    <div>
                      <h3 className="text-base font-bold text-gray-950">{event.title}</h3>
                      <p className="mt-1 text-sm leading-7 text-gray-700">{event.text}</p>
                      {event.sourceHref ? (
                        <TrustedExternalLink
                          href={event.sourceHref}
                          label={`Source: ${event.sourceLabel || 'View supporting record'}`}
                          className="mt-2 inline-flex text-xs font-bold text-blue-700"
                        />
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {page.officialAccess?.length ? (
            <section className="border-b border-gray-200 pb-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">Official Access</p>
              <h2 className="mb-4 text-2xl font-bold text-gray-950">
                {page.primaryKeyword} Official Source and Downloads
              </h2>
              <p className="mb-4 text-base leading-8 text-gray-700">
                These links are limited to official project repositories, release channels, publisher domains, or moderated historical references. Historical automation entries are preserved for context and do not endorse running old binaries.
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                {page.officialAccess.map((entry) => (
                  <TrustedExternalLink
                    key={entry.href}
                    href={entry.href}
                    label={entry.label}
                    note={entry.note}
                    kind={entry.kind || 'reference'}
                    className="rounded border border-gray-200 bg-white p-4 hover:border-gray-400 hover:no-underline"
                  />
                ))}
              </div>
            </section>
          ) : null}

              {page.sections.map((section) => (
            <section key={section.heading} className="border-b border-gray-200 pb-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">{section.eyebrow}</p>
              <h2 className="mb-4 text-2xl font-bold text-gray-950">{section.heading}</h2>
              <div className="space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}

          {page.faqs.length ? (
            <section className="border-b border-gray-200 pb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-950">{page.primaryKeyword} FAQ</h2>
              <div className="space-y-4">
                {page.faqs.map((faq) => (
                  <details key={faq.question} className="rounded border border-gray-200 bg-white p-4">
                    <summary className="cursor-pointer text-base font-bold text-gray-950">{faq.question}</summary>
                    <p className="mt-3 text-sm leading-7 text-gray-700">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          ) : null}

          {page.glossary?.length ? (
            <section className="border-b border-gray-200 pb-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">Glossary</p>
              <h2 className="mb-4 text-2xl font-bold text-gray-950">Terms Players Should Know</h2>
              <dl className="grid gap-4">
                {page.glossary.map((entry) => (
                  <div key={entry.term} className="rounded border border-gray-200 bg-white p-4">
                    <dt className="text-base font-bold text-gray-950">{entry.term}</dt>
                    <dd className="mt-2 text-sm leading-7 text-gray-700">{entry.definition}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}

          {page.researchNotes?.length ? (
            <section className="border-b border-gray-200 pb-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                {page.type === 'resource' ? 'Evidence Notes' : 'Source Notes'}
              </p>
              <h2 className="mb-4 text-2xl font-bold text-gray-950">
                {page.type === 'resource' ? 'How the Historical Record Was Verified' : 'What Public Sources Already Tell Us'}
              </h2>
              <div className="grid gap-4">
                {page.researchNotes.map((note) => (
                  <div key={note.label} className="rounded border border-gray-200 bg-white p-4">
                    <h3 className="text-base font-bold text-gray-950">{note.label}</h3>
                    <p className="mt-2 text-sm leading-7 text-gray-700">{note.value}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {page.mediaLeads?.length ? (
            <section className="border-b border-gray-200 pb-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">Media Leads</p>
              <h2 className="mb-4 text-2xl font-bold text-gray-950">Public Screenshot and Media Sources</h2>
              <p className="mb-4 text-base leading-8 text-gray-700">
                These are source leads for real screenshots and community media. We link to them for attribution and verification; files should only be mirrored locally when the server owner, source license, or contributor permission allows it.
              </p>
              <div className="grid gap-3">
                {page.mediaLeads.map((lead) => (
                  <TrustedExternalLink
                    key={lead.href}
                    href={lead.href}
                    label={lead.label}
                    note={lead.note}
                    className="rounded border border-gray-200 bg-white p-4 hover:border-gray-400 hover:no-underline"
                  />
                ))}
              </div>
            </section>
          ) : null}

          {deepDiveSections.length ? (
            <section className="border-b border-gray-200 pb-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">Deep Dive</p>
              <h2 className="mb-4 text-2xl font-bold text-gray-950">{page.primaryKeyword} Complete Player Guide</h2>
              <p className="mb-5 text-base leading-8 text-gray-700">
                These chapters are written for players who want to explore the server before registering, downloading a client, or investing time. Each section is designed to be expanded with owner-confirmed data, screenshots, reviews, and community notes.
              </p>
              <div className="space-y-3">
                {deepDiveSections.map((section, index) => (
                  <details key={`${section.heading}-${index}`} className="rounded border border-gray-200 bg-white p-4" open={index < 3}>
                    <summary className="cursor-pointer">
                      <span className="block text-xs font-bold uppercase tracking-widest text-gray-500">{section.eyebrow}</span>
                      <span className="mt-1 block text-lg font-bold text-gray-950">{section.heading}</span>
                    </summary>
                    <div className="mt-4 space-y-4">
                      {section.body.map((paragraph) => (
                        <p key={paragraph} className="text-sm leading-7 text-gray-700">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ) : null}

          {directoryData.servers.length ? (
            <section className="pb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-950">Matching Live Listings</h2>
              <div className="grid gap-3">
                {directoryData.servers.map((server) => (
                  <Link
                    key={server.id || `${server.name}-${server.ip}`}
                    href={`/servers/${buildServerSlug(server)}`}
                    className="rounded border border-gray-200 bg-white p-4 hover:border-gray-400 hover:no-underline"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-base font-bold text-gray-950">{server.name}</h3>
                        <p className="text-sm text-gray-600">
                          {server.version || 'Unknown client'} - {server.world_type || 'World type pending'} - {server.location || 'Location pending'}
                        </p>
                      </div>
                      <div className="text-sm font-bold text-gray-950">
                        {Number(server.players_online || 0).toLocaleString()} online
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </article>

        <aside className="space-y-5">
          {page.infobox?.length ? (
            <div className="rounded border border-gray-200 bg-white p-5">
              <h2 className="mb-3 text-base font-bold text-gray-950">Reference Box</h2>
              <dl className="space-y-3">
                {page.infobox.map((item) => (
                  <div key={item.label}>
                    <dt className="text-xs font-bold uppercase tracking-wide text-gray-500">{item.label}</dt>
                    <dd className="mt-1 text-sm font-semibold text-gray-900">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ) : null}

          {page.evergreenAngles?.length ? (
            <div className="rounded border border-gray-200 bg-white p-5">
              <h2 className="mb-3 text-base font-bold text-gray-950">Why This Page Exists</h2>
              <ul className="space-y-3">
                {page.evergreenAngles.map((angle) => (
                  <li key={angle} className="text-sm leading-6 text-gray-700">
                    {angle}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="rounded border border-gray-200 bg-white p-5">
            <h2 className="mb-3 text-base font-bold text-gray-950">Related Directory Pages</h2>
            <div className="flex flex-wrap gap-2">
              {internalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-800 hover:border-gray-400 hover:no-underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded border border-gray-200 bg-white p-5">
            <h2 className="mb-3 text-base font-bold text-gray-950">Search These Terms</h2>
            <div className="flex flex-wrap gap-2">
              {page.relatedServerQueries.map((query) => (
                <Link
                  key={query}
                  href={createQueryHref(query)}
                  className="rounded border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-800 hover:border-gray-400 hover:no-underline"
                >
                  {query}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded border border-gray-200 bg-white p-5">
            <h2 className="mb-3 text-base font-bold text-gray-950">Reference Sources</h2>
            <ul className="space-y-3">
              {page.sourceLinks.map((source) => (
                <li key={source.href}>
                  <TrustedExternalLink
                    href={source.href}
                    label={source.label}
                    className="text-sm font-semibold text-blue-700"
                  />
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <KeywordPageCommunity pageSlug={page.slug} keyword={page.primaryKeyword} />
    </main>
  );
}
