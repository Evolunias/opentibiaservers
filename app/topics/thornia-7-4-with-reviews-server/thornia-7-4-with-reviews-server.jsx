import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-4-with-reviews-server');
}

export default function Thornia74WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-4-with-reviews-server" />;
}
