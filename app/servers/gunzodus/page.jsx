import GunzodusWikiPage from '@/app/components/GunzodusWikiPage';
import { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  const metadata = buildCanonicalServerMetadata('gunzodus');
  return {
    ...metadata,
    title: 'Gunzodus Open Tibia Server | Real Map, Dungeons, PvP & Wars Wiki',
    description: 'Gunzodus Wiki covering the real-map Open Tibia server, custom items, no-bot dungeons, world bosses, Retro-PvP, guild wars, clients, rates, and official sources.',
    keywords: ['Gunzodus', 'Gunzodus server', 'Gunzodus OTS', 'Gunzodus Wiki', 'Gunzodus dungeons', 'Gunzodus PvP', 'Gunzodus real map'],
    alternates: { canonical: '/servers/gunzodus' },
  };
}

export default function Page() {
  return <GunzodusWikiPage />;
}
