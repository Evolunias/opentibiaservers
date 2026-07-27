import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-evo-players-online');
}

export default function Tibia14EvoPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-evo-players-online" />;
}
