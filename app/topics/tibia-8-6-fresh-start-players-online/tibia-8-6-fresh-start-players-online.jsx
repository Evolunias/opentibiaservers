import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-fresh-start-players-online');
}

export default function Tibia86FreshStartPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-fresh-start-players-online" />;
}
