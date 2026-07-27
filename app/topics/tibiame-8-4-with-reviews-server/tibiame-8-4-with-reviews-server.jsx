import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-4-with-reviews-server');
}

export default function Tibiame84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-4-with-reviews-server" />;
}
