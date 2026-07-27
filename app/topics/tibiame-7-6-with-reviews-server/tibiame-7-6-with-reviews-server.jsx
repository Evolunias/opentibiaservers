import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-6-with-reviews-server');
}

export default function Tibiame76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-6-with-reviews-server" />;
}
