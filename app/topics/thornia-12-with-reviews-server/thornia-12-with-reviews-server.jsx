import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-12-with-reviews-server');
}

export default function Thornia12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-12-with-reviews-server" />;
}
