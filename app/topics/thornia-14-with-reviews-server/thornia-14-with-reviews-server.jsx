import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-14-with-reviews-server');
}

export default function Thornia14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-14-with-reviews-server" />;
}
