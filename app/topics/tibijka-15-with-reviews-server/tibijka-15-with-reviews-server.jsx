import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-15-with-reviews-server');
}

export default function Tibijka15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-15-with-reviews-server" />;
}
