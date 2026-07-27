import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-72-with-reviews-server');
}

export default function Tibijka772WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-72-with-reviews-server" />;
}
