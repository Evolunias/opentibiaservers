import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ameria-guide');
}

export default function WithReviewsAmeriaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ameria-guide" />;
}
