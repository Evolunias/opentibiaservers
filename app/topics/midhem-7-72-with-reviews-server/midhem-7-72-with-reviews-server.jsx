import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-72-with-reviews-server');
}

export default function Midhem772WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-72-with-reviews-server" />;
}
