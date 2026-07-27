import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-15-with-reviews-server');
}

export default function Tibiame15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-15-with-reviews-server" />;
}
