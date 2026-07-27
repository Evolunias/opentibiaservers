import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-review-north-america');
}

export default function WithReviewsReviewNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-review-north-america" />;
}
