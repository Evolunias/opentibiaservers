import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-evo-players-online');
}

export default function Tibia854EvoPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-evo-players-online" />;
}
