import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-13-with-reviews-server');
}

export default function Midhem13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-13-with-reviews-server" />;
}
