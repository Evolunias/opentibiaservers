import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

import NoxiousOTWikiPage from '@/app/components/NoxiousOTWikiPage';

export const revalidate = 3600;

export function generateMetadata() {
  return {
    title: 'NoxiousOT Server Guide: Rates, Rules, Clients & PvP Features',
    description: 'An evidence-led NoxiousOT 8.60 guide covering staged rates, PvP events, custom islands, magic items, official clients, rules, activity, and sources.',
  };
}

export default function Page() {
  return <NoxiousOTWikiPage />;
}
