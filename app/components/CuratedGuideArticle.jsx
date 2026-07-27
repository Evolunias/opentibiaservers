import Link from 'next/link';
import Image from 'next/image';
import KeywordPageCommunity from '@/app/components/KeywordPageCommunity';
import { buildServerSlug } from '@/lib/server-paths';
import { buildCuratedJsonLd } from '@/lib/curated-pages';
import { fetchDirectoryServers } from '@/lib/directory-data';
import { buildDeepDiveSections, estimateCuratedPageWords } from '@/lib/deep-dive-pages';

function createQueryHref(query) {
  return `/?search=${encodeURIComponent(query)}`;
}

function semanticProfile(page) {
  if (page.type === 'official-world') {
    return {
      eyebrow: 'World Archive Signals',
      h2: `${page.primaryKeyword} historical world reference`,
      h3: 'Guild memory, player history, wars, and OT alternatives',
      h4: 'Primary world keyword',
      h5: 'Historical support terms',
      underline: 'world history, community memory, and durable archive value',
      copy:
        'Internal links connect this world archive to comparable Open Tibia listings, historical references, contribution workflows, and related search terms.',
    };
  }

  if (page.type === 'ecosystem') {
    return {
      eyebrow: 'Ecosystem Search Signals',
      h2: `${page.primaryKeyword} Open Tibia ecosystem reference`,
      h3: 'Discovery, community context, sources, and directory intent',
      h4: 'Primary ecosystem keyword',
      h5: 'Supporting ecosystem terms',
      underline: 'source context, community usefulness, and player discovery',
      copy:
        'Internal links connect this ecosystem page to active listings, related keywords, server owner workflows, and source-backed community records.',
    };
  }

  return {
    eyebrow: 'Server Search Signals',
    h2: `${page.primaryKeyword} server research and verification`,
    h3: 'Official links, screenshots, reviews, and live server signals',
    h4: 'Primary server keyword',
    h5: 'Supporting server keywords',
    underline: 'server identity, source verification, and player trust',
    copy:
      'Internal links connect this server reference to matching Open Tibia listings, related search terms, server-claim workflows, and community contribution areas.',
  };
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
  const semantics = semanticProfile(page);

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
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-300">
              {page.pageLabel || (page.type === 'official-world' ? 'Official Tibia World Research' : 'Open Tibia Research')}
            </p>
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
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {page.sections.map((section) => (
            <section key={section.heading} className="border-b border-gray-200 pb-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">{section.eyebrow}</p>
              <h2 className="mb-4 text-2xl font-bold text-gray-950">{section.heading}</h2>
              <h3 className="mb-3 text-xl font-bold text-gray-900">{page.primaryKeyword} research context</h3>
              <div className="space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <section className="border-b border-gray-200 pb-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">{semantics.eyebrow}</p>
            <h2 className="mb-4 text-2xl font-bold text-gray-950">{semantics.h2}</h2>
            <h3 className="mb-3 text-xl font-bold text-gray-900">{semantics.h3}</h3>
            <div className="space-y-4 text-base leading-8 text-gray-700">
              <p>
                <strong>{page.primaryKeyword}</strong> is the primary entity, <em>{page.keywords?.slice(0, 3).join(', ')}</em> are supporting terms, and this page stays <u>{semantics.underline}</u>.
              </p>
              <p>
                {semantics.copy} The page also points players toward <Link href={createQueryHref(page.primaryKeyword)} className="font-semibold text-blue-700">matching Open Tibia listings</Link>. Outbound links remain in the reference-source section for verification.
              </p>
            </div>
            <h4 className="mt-5 text-lg font-bold text-gray-950">{semantics.h4}</h4>
            <p className="mt-2 text-sm leading-7 text-gray-700">{page.primaryKeyword}</p>
            <h5 className="mt-4 text-base font-bold text-gray-950">{semantics.h5}</h5>
            <p className="mt-2 text-sm leading-7 text-gray-700">{page.keywords?.join(' / ')}</p>
          </section>

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
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">Sourced Research</p>
              <h2 className="mb-4 text-2xl font-bold text-gray-950">What Public Sources Already Tell Us</h2>
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
                  <a key={lead.href} href={lead.href} target="_blank" rel="noopener noreferrer" className="rounded border border-gray-200 bg-white p-4 hover:border-gray-400 hover:no-underline">
                    <h3 className="text-base font-bold text-blue-700">{lead.label}</h3>
                    <p className="mt-2 text-sm leading-7 text-gray-700">{lead.note}</p>
                  </a>
                ))}
              </div>
            </section>
          ) : null}

          {deepDiveSections.length ? (
            <section className="border-b border-gray-200 pb-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">Deep Dive</p>
              <h2 className="mb-4 text-2xl font-bold text-gray-950">{page.primaryKeyword} Complete Player Research Guide</h2>
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
                  <a href={source.href} className="text-sm font-semibold text-blue-700" rel="nofollow noopener noreferrer">
                    {source.label}
                  </a>
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
