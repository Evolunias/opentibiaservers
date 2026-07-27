import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-10-0-with-reviews-server');
}

export default function Tibiame100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-10-0-with-reviews-server" />;
}
