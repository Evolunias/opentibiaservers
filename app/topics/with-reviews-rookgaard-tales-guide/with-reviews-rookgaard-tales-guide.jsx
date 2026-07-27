import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rookgaard-tales-guide');
}

export default function WithReviewsRookgaardTalesGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rookgaard-tales-guide" />;
}
