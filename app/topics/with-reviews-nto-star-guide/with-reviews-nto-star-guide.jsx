import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nto-star-guide');
}

export default function WithReviewsNtoStarGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nto-star-guide" />;
}
