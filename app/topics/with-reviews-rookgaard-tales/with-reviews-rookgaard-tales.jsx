import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rookgaard-tales');
}

export default function WithReviewsRookgaardTalesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rookgaard-tales" />;
}
