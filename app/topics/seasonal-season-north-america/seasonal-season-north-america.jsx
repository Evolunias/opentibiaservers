import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-season-north-america');
}

export default function SeasonalSeasonNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-season-north-america" />;
}
