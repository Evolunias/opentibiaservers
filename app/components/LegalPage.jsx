import Link from 'next/link';

export default function LegalPage({ title, eyebrow, updatedAt, intro, sections }) {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-950">
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-10">
          <Link href="/" className="text-sm font-semibold text-blue-700 hover:underline">
            Back to directory
          </Link>
          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-gray-500">{eyebrow}</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-950">{title}</h1>
          <p className="mt-4 text-base leading-8 text-gray-700">{intro}</p>
          <p className="mt-4 text-sm font-semibold text-gray-500">Last updated: {updatedAt}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-8">
        <article className="space-y-6">
          {sections.map((section) => (
            <section key={section.heading} className="rounded border border-gray-200 bg-white p-5">
              <h2 className="text-xl font-bold text-gray-950">{section.heading}</h2>
              <div className="mt-3 space-y-3">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-7 text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </article>
      </section>
    </main>
  );
}
