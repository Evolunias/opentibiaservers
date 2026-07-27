import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-6-with-reviews-server');
}

export default function Midhem86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-6-with-reviews-server" />;
}
