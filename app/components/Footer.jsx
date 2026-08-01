import Link from 'next/link';
import FeaturedServerAd from './FeaturedServerAd';

const footerLinks = [
  { href: '/', label: 'Server Directory' },
  { href: '/community', label: 'Community' },
  { href: '/knowledge', label: 'Knowledge' },
  { href: '/resources', label: 'Resources' },
  { href: '/submit-server', label: 'Submit Server' },
  { href: '/terms', label: 'Terms' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-950 text-white">
      <FeaturedServerAd placement="footer" />
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3 text-white hover:no-underline">
            <span className="flex h-10 w-10 items-center justify-center rounded border border-white/20 bg-white text-sm font-bold text-gray-950">
              OTS
            </span>
            <span>
              <span className="block text-base font-bold">Open Tibia Servers</span>
              <span className="block text-sm text-gray-300">Independent Open Tibia server directory and community records.</span>
            </span>
          </Link>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-300">
            OpenTibiaServers.com aggregates public server-list data, owner-submitted details, community discussion, and source-backed server pages for players comparing Open Tibia servers. Tibia is a trademark of CipSoft GmbH; this site is an independent community directory and is not affiliated with CipSoft.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-widest text-gray-400">Site</h2>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded px-2 py-1 text-sm font-semibold text-gray-200 hover:bg-white/10 hover:text-white hover:no-underline">
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
      <div className="border-t border-white/10 px-6 py-4">
        <p className="mx-auto max-w-7xl text-xs text-gray-400">
          (c) {new Date().getFullYear()} OpenTibiaServers.com. Public source records are attributed where available; server owners can request corrections or claim listings.
        </p>
      </div>
    </footer>
  );
}
