import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-fresh-start-players-online');
}

export default function Tibia96FreshStartPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-fresh-start-players-online" />;
}
