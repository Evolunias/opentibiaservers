import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-fresh-start-players-online');
}

export default function Tibia74FreshStartPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-fresh-start-players-online" />;
}
