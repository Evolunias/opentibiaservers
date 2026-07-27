import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-9-6-with-reviews-server');
}

export default function Midhem96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-9-6-with-reviews-server" />;
}
