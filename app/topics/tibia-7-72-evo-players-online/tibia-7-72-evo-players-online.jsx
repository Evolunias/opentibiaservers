import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-evo-players-online');
}

export default function Tibia772EvoPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-evo-players-online" />;
}
