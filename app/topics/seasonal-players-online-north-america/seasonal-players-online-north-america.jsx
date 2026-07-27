import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-players-online-north-america');
}

export default function SeasonalPlayersOnlineNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-players-online-north-america" />;
}
