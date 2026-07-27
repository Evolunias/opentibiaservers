import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-season-usa');
}

export default function SeasonalSeasonUsaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-season-usa" />;
}
