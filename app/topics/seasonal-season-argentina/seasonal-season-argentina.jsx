import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-season-argentina');
}

export default function SeasonalSeasonArgentinaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-season-argentina" />;
}
