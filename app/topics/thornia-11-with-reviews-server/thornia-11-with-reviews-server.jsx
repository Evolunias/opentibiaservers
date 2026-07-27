import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-11-with-reviews-server');
}

export default function Thornia11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-11-with-reviews-server" />;
}
