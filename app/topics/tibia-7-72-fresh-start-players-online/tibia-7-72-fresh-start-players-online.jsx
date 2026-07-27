import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-fresh-start-players-online');
}

export default function Tibia772FreshStartPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-fresh-start-players-online" />;
}
