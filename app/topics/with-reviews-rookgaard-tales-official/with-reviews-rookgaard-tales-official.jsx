import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rookgaard-tales-official');
}

export default function WithReviewsRookgaardTalesOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rookgaard-tales-official" />;
}
