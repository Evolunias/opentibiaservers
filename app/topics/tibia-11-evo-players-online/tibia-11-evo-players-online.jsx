import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-evo-players-online');
}

export default function Tibia11EvoPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-evo-players-online" />;
}
