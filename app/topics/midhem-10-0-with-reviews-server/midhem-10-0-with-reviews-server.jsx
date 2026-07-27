import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-10-0-with-reviews-server');
}

export default function Midhem100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-10-0-with-reviews-server" />;
}
