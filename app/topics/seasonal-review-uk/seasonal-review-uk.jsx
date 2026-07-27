import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-review-uk');
}

export default function SeasonalReviewUkKeywordPage() {
  return <StaticKeywordPage slug="seasonal-review-uk" />;
}
