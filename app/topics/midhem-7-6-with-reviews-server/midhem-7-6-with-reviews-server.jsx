import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-6-with-reviews-server');
}

export default function Midhem76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-6-with-reviews-server" />;
}
