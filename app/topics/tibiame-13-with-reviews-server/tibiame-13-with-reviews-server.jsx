import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-13-with-reviews-server');
}

export default function Tibiame13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-13-with-reviews-server" />;
}
