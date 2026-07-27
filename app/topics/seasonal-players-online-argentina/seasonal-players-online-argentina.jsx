import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-players-online-argentina');
}

export default function SeasonalPlayersOnlineArgentinaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-players-online-argentina" />;
}
