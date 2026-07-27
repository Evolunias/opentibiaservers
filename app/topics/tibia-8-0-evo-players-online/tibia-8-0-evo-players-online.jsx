import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-evo-players-online');
}

export default function Tibia80EvoPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-evo-players-online" />;
}
