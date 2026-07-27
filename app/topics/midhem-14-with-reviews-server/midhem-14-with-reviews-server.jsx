import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-14-with-reviews-server');
}

export default function Midhem14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-14-with-reviews-server" />;
}
