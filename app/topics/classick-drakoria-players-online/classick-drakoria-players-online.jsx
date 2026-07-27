import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-players-online');
}

export default function ClassickDrakoriaPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-players-online" />;
}
