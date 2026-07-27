import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-fresh-start-players-online');
}

export default function Tibia15FreshStartPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-fresh-start-players-online" />;
}
