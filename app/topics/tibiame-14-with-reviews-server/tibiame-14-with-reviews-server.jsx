import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-14-with-reviews-server');
}

export default function Tibiame14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-14-with-reviews-server" />;
}
