import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rookgaard-tales-ots');
}

export default function WithReviewsRookgaardTalesOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rookgaard-tales-ots" />;
}
