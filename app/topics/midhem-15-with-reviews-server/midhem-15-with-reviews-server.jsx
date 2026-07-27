import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-15-with-reviews-server');
}

export default function Midhem15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-15-with-reviews-server" />;
}
