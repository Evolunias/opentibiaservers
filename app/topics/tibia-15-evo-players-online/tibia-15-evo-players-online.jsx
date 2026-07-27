import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-evo-players-online');
}

export default function Tibia15EvoPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-evo-players-online" />;
}
