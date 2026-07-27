import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-review-germany');
}

export default function WithReviewsReviewGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-review-germany" />;
}
