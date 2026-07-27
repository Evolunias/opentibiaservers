import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-11-with-reviews-server');
}

export default function Tibiame11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-11-with-reviews-server" />;
}
