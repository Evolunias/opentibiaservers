import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-15-with-reviews-server');
}

export default function Evolera15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-15-with-reviews-server" />;
}
