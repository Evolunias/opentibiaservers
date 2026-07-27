import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-6-with-reviews-server');
}

export default function Tibijka86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-6-with-reviews-server" />;
}
