import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-13-with-reviews-server');
}

export default function Tibijka13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-13-with-reviews-server" />;
}
