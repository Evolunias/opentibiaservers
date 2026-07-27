import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-review-europe');
}

export default function WithReviewsReviewEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-review-europe" />;
}
