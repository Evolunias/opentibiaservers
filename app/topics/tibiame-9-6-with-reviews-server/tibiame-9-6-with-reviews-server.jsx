import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-9-6-with-reviews-server');
}

export default function Tibiame96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-9-6-with-reviews-server" />;
}
