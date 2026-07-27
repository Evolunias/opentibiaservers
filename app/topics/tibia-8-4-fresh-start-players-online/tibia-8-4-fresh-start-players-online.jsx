import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-fresh-start-players-online');
}

export default function Tibia84FreshStartPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-fresh-start-players-online" />;
}
