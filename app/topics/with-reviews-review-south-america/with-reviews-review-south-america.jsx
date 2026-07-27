import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-review-south-america');
}

export default function WithReviewsReviewSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-review-south-america" />;
}
