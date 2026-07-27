import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-evo-players-online');
}

export default function Tibia81EvoPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-evo-players-online" />;
}
