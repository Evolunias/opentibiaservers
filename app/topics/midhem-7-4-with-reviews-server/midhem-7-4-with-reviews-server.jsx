import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-4-with-reviews-server');
}

export default function Midhem74WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-4-with-reviews-server" />;
}
