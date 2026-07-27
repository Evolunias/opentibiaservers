import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-season-poland');
}

export default function SeasonalSeasonPolandKeywordPage() {
  return <StaticKeywordPage slug="seasonal-season-poland" />;
}
