import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-players-online-canada');
}

export default function SeasonalPlayersOnlineCanadaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-players-online-canada" />;
}
