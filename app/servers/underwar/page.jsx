import UnderwarWikiPage from '@/app/components/UnderwarWikiPage';

export const metadata = {
  title: 'UnderWar 2.0 Server Guide: Rates, Stamina, PvP & History',
  description: 'A source-aware UnderWar 2.0 guide covering the 8.60 PVP archive record, documented stamina mechanics, conflicting rate records, historical war features, and connection safety.',
  keywords: ['UnderWar', 'UnderWar 2.0', 'UnderWar OT', 'UnderWar Open Tibia server', 'UnderWar rates', 'UnderWar stamina', 'UnderWar PVP', 'UnderWar 8.60'],
  alternates: { canonical: '/servers/underwar' },
  openGraph: {
    title: 'UnderWar 2.0: Open Tibia Server Guide, Rates, Stamina, PvP and History',
    description: 'Explore verified UnderWar sources, its documented stamina loop, archive profile, rate differences, historical features, and safe connection checklist.',
    url: '/servers/underwar',
    type: 'article',
  },
};

export default function Page() {
  return <UnderwarWikiPage />;
}
