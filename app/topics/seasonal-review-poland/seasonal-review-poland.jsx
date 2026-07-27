import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-review-poland');
}

export default function SeasonalReviewPolandKeywordPage() {
  return <StaticKeywordPage slug="seasonal-review-poland" />;
}
