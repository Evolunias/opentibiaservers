import Link from 'next/link';
import { buildAbsoluteUrl, getSiteName } from '@/lib/seo';

export const metadata = {
  title: `Contact Us | ${getSiteName()}`,
  description: 'Contact OpenTibiaServers.com for server claims, corrections, listing updates, abuse reports, privacy requests, partnerships, and community feedback.',
  alternates: { canonical: buildAbsoluteUrl('/contact') },
};

const contactTopics = [
  ['Claim a server', 'Send the server name, official website, OtLand or OTServlist source, and proof that you own or manage the listing.'],
  ['Correct a listing', 'Send the page URL, what is wrong, and the official source that verifies the correction.'],
  ['Report abuse or unsafe links', 'Send the page URL and describe the issue, especially malware mirrors, impersonation, phishing, or deceptive download links.'],
  ['Privacy request', 'Send the affected page or account context and the specific data you want reviewed.'],
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-950">
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <Link href="/" className="text-sm font-semibold text-blue-700 hover:underline">
            Back to directory
          </Link>
          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-gray-500">Contact</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-950">Contact OpenTibiaServers.com</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-gray-700">
            Use this page for server claims, listing corrections, official source updates, abuse reports, privacy requests, and community feedback.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-6 py-8 lg:grid-cols-[1fr_360px]">
        <div className="rounded border border-gray-200 bg-white p-5">
          <h2 className="text-xl font-bold text-gray-950">What to Include</h2>
          <div className="mt-4 grid gap-3">
            {contactTopics.map(([title, body]) => (
              <div key={title} className="rounded border border-gray-200 bg-gray-50 p-4">
                <h3 className="text-base font-bold text-gray-950">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{body}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded border border-gray-200 bg-white p-5">
          <h2 className="text-xl font-bold text-gray-950">Contact Route</h2>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            Until the support inbox is wired into the live app, use the listing claim flow where available or open a correction request through the relevant server page.
          </p>
          <div className="mt-5 grid gap-3">
            <Link href="/submit-server" className="rounded bg-gray-950 px-4 py-3 text-center text-sm font-bold text-white hover:opacity-85 hover:no-underline">
              Submit or Claim a Server
            </Link>
            <Link href="/community" className="rounded border border-gray-300 px-4 py-3 text-center text-sm font-bold text-gray-900 hover:bg-gray-50 hover:no-underline">
              Visit Community
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
