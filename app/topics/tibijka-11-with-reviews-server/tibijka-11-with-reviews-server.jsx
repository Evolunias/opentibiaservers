import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-11-with-reviews-server');
}

export default function Tibijka11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-11-with-reviews-server" />;
}
