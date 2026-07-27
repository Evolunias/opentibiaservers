import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-6-with-reviews-server');
}

export default function Tibijka76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-6-with-reviews-server" />;
}
