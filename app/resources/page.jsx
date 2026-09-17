import Link from 'next/link';
import catalog from '../../data/ot-open-source-catalog.json';

export const metadata = {
  title: 'Open-source OT resources | OpenTibiaServers',
  description: 'Curated GitHub engines, clients, OTBM map tools, and datapacks. No third-party forum scrapes. VirusTotal required for binaries.',
};

export default function ResourcesPage() {
  return (
    <main className="directory-shell min-h-screen">
      <div className="directory-shell__glow" aria-hidden="true" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-8 pb-16">
        <p className="text-sm opacity-70 mb-2">
          <Link href="/">Forum</Link>
          <span> / </span>
          <span>Resources</span>
        </p>
        <h1 className="text-3xl font-extrabold mb-3">{catalog.title}</h1>
        <p className="mb-4 opacity-90 max-w-3xl">
          Real upstream GitHub projects server owners use: engines, clients, Remere/OTBM tooling,
          and datapacks with monsters, scripts, and world data. We link the source. We do not
          scrape or rehost OTLand forum posts, galleries, or attachments.
        </p>
        <div className="mb-8 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-sm">
          <strong>File share rule:</strong> {catalog.policy.virustotal_rule}
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          <Link
            href="/resources/submit"
            className="inline-flex items-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-bold text-black"
          >
            Submit a resource
          </Link>
          <a
            href="https://www.virustotal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold"
          >
            Open VirusTotal
          </a>
        </div>

        {catalog.categories.map((cat) => (
          <section key={cat.id} className="mb-10">
            <h2 className="text-xl font-bold mb-3">{cat.name}</h2>
            <ul className="space-y-3">
              {cat.items.map((item) => (
                <li key={item.url} className="rounded-lg border border-white/10 bg-black/20 p-4">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline"
                  >
                    {item.full_name}
                  </a>
                  <span className="ml-2 text-sm opacity-70">
                    Ã¢Ëœâ€¦ {item.stars} Ã‚Â· {item.license}
                  </span>
                  <p className="mt-1 text-sm opacity-90">{item.description}</p>
                  {item.provides ? (
                    <p className="mt-2 text-xs opacity-70">Provides: {item.provides.join(', ')}</p>
                  ) : null}
                  {item.map_release ? (
                    <p className="mt-1 text-xs opacity-70">Map assets: {item.map_release}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">When you share a map or pack on the forum</h2>
          <ol className="list-decimal ml-5 space-y-1 text-sm opacity-90">
            {catalog.share_template.body_fields.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}