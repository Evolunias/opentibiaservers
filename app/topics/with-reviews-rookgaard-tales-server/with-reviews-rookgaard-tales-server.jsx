import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rookgaard-tales-server');
}

export default function WithReviewsRookgaardTalesServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rookgaard-tales-server" />;
}
