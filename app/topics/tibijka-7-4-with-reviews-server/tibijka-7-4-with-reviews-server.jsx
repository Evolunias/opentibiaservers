import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-4-with-reviews-server');
}

export default function Tibijka74WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-4-with-reviews-server" />;
}
