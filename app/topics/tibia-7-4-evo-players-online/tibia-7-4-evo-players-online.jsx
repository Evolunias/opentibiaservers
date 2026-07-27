import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-evo-players-online');
}

export default function Tibia74EvoPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-evo-players-online" />;
}
