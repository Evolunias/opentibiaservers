import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-12-with-reviews-server');
}

export default function Midhem12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-12-with-reviews-server" />;
}
