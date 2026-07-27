import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-season-canada');
}

export default function SeasonalSeasonCanadaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-season-canada" />;
}
