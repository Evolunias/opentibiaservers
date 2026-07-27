import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-1-with-reviews-server');
}

export default function Midhem81WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-1-with-reviews-server" />;
}
