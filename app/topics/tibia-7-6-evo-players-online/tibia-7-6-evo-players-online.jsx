import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-evo-players-online');
}

export default function Tibia76EvoPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-evo-players-online" />;
}
