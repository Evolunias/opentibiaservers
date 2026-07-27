import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-fresh-start-players-online');
}

export default function Tibia13FreshStartPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-fresh-start-players-online" />;
}
