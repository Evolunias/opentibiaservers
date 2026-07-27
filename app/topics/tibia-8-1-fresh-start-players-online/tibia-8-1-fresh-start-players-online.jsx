import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-fresh-start-players-online');
}

export default function Tibia81FreshStartPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-fresh-start-players-online" />;
}
