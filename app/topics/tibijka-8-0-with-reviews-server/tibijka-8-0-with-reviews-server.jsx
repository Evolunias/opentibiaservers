import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-0-with-reviews-server');
}

export default function Tibijka80WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-0-with-reviews-server" />;
}
