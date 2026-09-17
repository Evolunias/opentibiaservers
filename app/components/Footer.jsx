import Link from 'next/link';
import FeaturedServerAd from './FeaturedServerAd';

const footerLinks = [
  { href: '/', label: 'Server Directory' },
  { href: '/knowledge', label: 'Knowledge' },
  { href: '/resources', label: 'Resources' },
  { href: '/wiki', label: 'Wiki' },
  { href: '/submit-server', label: 'Submit Server' },
  { href: '/terms', label: 'Terms' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="ots-site-footer border-t border-gray-200 bg-gray-950 text-white">
      <FeaturedServerAd placement="footer" />
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <Link href="/" className="inline-flex flex-col text-white hover:no-underline">
            <span className="block text-base font-bold">Open Tibia Servers</span>
            <span className="block text-sm text-gray-300">Independent Open Tibia server directory and community records.</span>
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
        <p className="ots-footer-partner mx-auto mt-2 max-w-7xl text-xs text-gray-300">
          Featured partner:{' '}
          <a href="https://evomanias.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
            Evomanias
          </a>
          {' '}— Plus Plan $200/yr (was $360, save $160) ·{' '}
          <a href="https://evomanias.com/downloads" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
            free download
          </a>
          {' '}· 500 points ·{' '}
          <a href="https://discord.gg/wj4D48Jj5W" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
            Discord backpack
          </a>
          {' '}·{' '}
          <Link href="/evomanias" className="underline hover:text-white">
            profile
          </Link>
        </p>
      </div>
    </footer>
  );
}
