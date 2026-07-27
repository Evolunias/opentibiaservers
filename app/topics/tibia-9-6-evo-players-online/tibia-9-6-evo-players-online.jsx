import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-evo-players-online');
}

export default function Tibia96EvoPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-evo-players-online" />;
}
