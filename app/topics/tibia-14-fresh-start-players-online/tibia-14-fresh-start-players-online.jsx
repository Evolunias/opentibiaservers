import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-fresh-start-players-online');
}

export default function Tibia14FreshStartPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-fresh-start-players-online" />;
}
