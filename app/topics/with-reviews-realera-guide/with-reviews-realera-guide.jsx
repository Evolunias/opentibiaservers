import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realera-guide');
}

export default function WithReviewsRealeraGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realera-guide" />;
}
