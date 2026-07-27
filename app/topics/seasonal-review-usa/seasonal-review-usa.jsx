import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-review-usa');
}

export default function SeasonalReviewUsaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-review-usa" />;
}
