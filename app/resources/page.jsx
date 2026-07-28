import Link from 'next/link';
import { buildAbsoluteUrl, getSiteName } from '@/lib/seo';
import { getPrimaryResourcePages } from '@/lib/resource-pages';

export const metadata = {
  title: 'Open Tibia Resources, Tools, Editors, Engines, Bots and History',
  description: 'Browse Open Tibia resources including Remere\'s Map Editor, item editors, DAT and SPR tools, OTClient, TFS, Canary, AACs, and historical Tibia bots.',
  keywords: [
    'Open Tibia resources',
    'Open Tibia tools',
    'Remeres Map Editor',
    'OTItemEditor',
    'Tibia DAT editor',
    'Tibia SPR editor',
    'OTClient',
    'The Forgotten Server',
    'Canary OpenTibia',
    'Tibia bots history',
  ],
  alternates: {
    canonical: buildAbsoluteUrl('/resources'),
  },
  openGraph: {
    title: 'Open Tibia Resources, Tools, Editors, Engines, Bots and History',
    description: 'A wiki-style Open Tibia resource index for tools, editors, engines, account makers, clients, and historical automation names.',
    url: buildAbsoluteUrl('/resources'),
    siteName: getSiteName(),
    type: 'website',
  },
};

function groupResources(resources) {
  return resources.reduce((groups, page) => {
    const category = page.facts.find((fact) => fact.label === 'Category')?.value || 'Resources';
    groups[category] = groups[category] || [];
    groups[category].push(page);
    return groups;
  }, {});
}

export default function ResourcesPage() {
  const resources = getPrimaryResourcePages();
  const groups = groupResources(resources);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Open Tibia Resources',
      description: metadata.description,
      url: buildAbsoluteUrl('/resources'),
      hasPart: resources.map((page) => ({
        '@type': 'Article',
        name: page.primaryKeyword,
        url: buildAbsoluteUrl(page.path),
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Open Tibia Servers', item: buildAbsoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'Resources', item: buildAbsoluteUrl('/resources') },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-950">
      {jsonLd.map((entry, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}

      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="mb-5 flex flex-wrap items-center gap-3 text-sm">
            <Link href="/" className="font-semibold text-gray-800 hover:text-gray-950">
              Open Tibia Servers
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Resources</span>
          </div>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-gray-950 md:text-6xl">
            Open Tibia Resources
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-700">
            A source-linked wiki for Open Tibia tools, editors, engines, clients, account makers, and historical Tibia automation names. The goal is to help players and server owners understand the ecosystem behind the listings.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/" className="rounded border border-gray-950 bg-gray-950 px-5 py-3 text-sm font-bold text-white hover:opacity-85 hover:no-underline">
              Browse Servers
            </Link>
            <Link href="/otland" className="rounded border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-gray-950 hover:bg-gray-100 hover:no-underline">
              OTLand Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-gray-100">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr_1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Historical Standard</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-950">Dates are tied to surviving evidence</h2>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                Every entry distinguishes an exact release, an earliest verified archive, a repository opening, and an uncertain community memory. A date is never made more precise than its source.
              </p>
            </div>
            <div className="border-l border-gray-300 pl-5">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Coverage</p>
              <p className="mt-2 text-3xl font-bold text-gray-950">{resources.length}</p>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                Canonical tools, engines, clients, account makers, libraries, editors, and historical automation projects.
              </p>
            </div>
            <div className="border-l border-gray-300 pl-5">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Page Depth</p>
              <p className="mt-2 text-lg font-bold text-gray-950">Origin through present status</p>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                Each guide covers lineage, milestones, trends, common uses, notable impact, compatibility, safety, and primary references.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6">
          {Object.entries(groups).map(([category, pages]) => (
            <section key={category} className="border-b border-gray-200 pb-8">
              <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Resource Category</p>
                  <h2 className="mt-1 text-2xl font-bold text-gray-950">{category}</h2>
                </div>
                <p className="text-sm font-semibold text-gray-500">{pages.length} entries</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {pages.map((page) => (
                  <Link key={page.slug} href={page.path} className="rounded border border-gray-200 bg-white p-5 hover:border-gray-400 hover:no-underline">
                    <h3 className="text-lg font-bold text-gray-950">{page.primaryKeyword}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-700">{page.dek}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {page.facts.slice(1, 3).map((fact) => (
                        <span key={fact.label} className="rounded border border-gray-200 bg-gray-50 px-2 py-1 text-xs font-semibold text-gray-700">
                          {fact.value}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-2 rounded border border-gray-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-gray-950">Historical Automation Policy</h2>
          <p className="mt-3 text-base leading-8 text-gray-700">
            Bot pages are included for community history, search context, and rule awareness. They are not download pages or usage guides. Open Tibia servers set their own automation rules, and players should follow each server&apos;s official policy before using any client modification, macro, proxy, or automation tool.
          </p>
        </section>
      </section>
    </main>
  );
}
