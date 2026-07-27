import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rookgaard-tales-client');
}

export default function WithReviewsRookgaardTalesClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rookgaard-tales-client" />;
}
