'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { href: '/', label: 'Forum', hint: 'Community boards' },
  { href: '/directory', label: 'Directory', hint: 'Server listings' },
];

export default function SiteModeTabs() {
  const pathname = usePathname();

  return (
    <div className="site-mode-tabs" role="tablist" aria-label="Site mode">
      {tabs.map((tab) => {
        const active = tab.href === '/'
          ? pathname === '/' || pathname.startsWith('/forum')
          : pathname === tab.href || pathname.startsWith(`${tab.href}/`);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            role="tab"
            aria-selected={active}
            className={`site-mode-tabs__tab${active ? ' is-active' : ''}`}
          >
            <span className="site-mode-tabs__label">{tab.label}</span>
            <span className="site-mode-tabs__hint">{tab.hint}</span>
          </Link>
        );
      })}
    </div>
  );
}
