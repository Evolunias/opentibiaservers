import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-13-with-reviews-server');
}

export default function Thornia13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-13-with-reviews-server" />;
}
