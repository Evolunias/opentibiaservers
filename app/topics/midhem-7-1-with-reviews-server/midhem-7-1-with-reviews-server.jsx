import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-1-with-reviews-server');
}

export default function Midhem71WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-1-with-reviews-server" />;
}
