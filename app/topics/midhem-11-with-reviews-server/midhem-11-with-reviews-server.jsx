import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-11-with-reviews-server');
}

export default function Midhem11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-11-with-reviews-server" />;
}
