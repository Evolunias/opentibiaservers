import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-players-online-mexico');
}

export default function SeasonalPlayersOnlineMexicoKeywordPage() {
  return <StaticKeywordPage slug="seasonal-players-online-mexico" />;
}
