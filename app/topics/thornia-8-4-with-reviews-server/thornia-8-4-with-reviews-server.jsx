import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-4-with-reviews-server');
}

export default function Thornia84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-4-with-reviews-server" />;
}
