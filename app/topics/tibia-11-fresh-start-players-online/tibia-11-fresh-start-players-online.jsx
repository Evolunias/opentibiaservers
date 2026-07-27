import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-fresh-start-players-online');
}

export default function Tibia11FreshStartPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-fresh-start-players-online" />;
}
