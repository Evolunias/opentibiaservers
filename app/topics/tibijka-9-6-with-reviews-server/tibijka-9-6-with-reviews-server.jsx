import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-9-6-with-reviews-server');
}

export default function Tibijka96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-9-6-with-reviews-server" />;
}
