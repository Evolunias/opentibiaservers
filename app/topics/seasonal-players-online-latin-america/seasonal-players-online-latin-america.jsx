import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-players-online-latin-america');
}

export default function SeasonalPlayersOnlineLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-players-online-latin-america" />;
}
