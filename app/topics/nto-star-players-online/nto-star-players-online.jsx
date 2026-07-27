import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-players-online');
}

export default function NtoStarPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="nto-star-players-online" />;
}
