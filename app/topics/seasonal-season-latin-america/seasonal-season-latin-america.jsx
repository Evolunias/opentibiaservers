import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-season-latin-america');
}

export default function SeasonalSeasonLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-season-latin-america" />;
}
