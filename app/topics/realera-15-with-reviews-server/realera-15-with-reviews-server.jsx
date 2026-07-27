import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-15-with-reviews-server');
}

export default function Realera15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="realera-15-with-reviews-server" />;
}
