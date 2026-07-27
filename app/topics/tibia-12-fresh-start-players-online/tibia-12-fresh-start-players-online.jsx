import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-fresh-start-players-online');
}

export default function Tibia12FreshStartPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-fresh-start-players-online" />;
}
