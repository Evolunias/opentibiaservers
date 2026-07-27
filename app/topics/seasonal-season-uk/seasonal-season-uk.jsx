import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-season-uk');
}

export default function SeasonalSeasonUkKeywordPage() {
  return <StaticKeywordPage slug="seasonal-season-uk" />;
}
