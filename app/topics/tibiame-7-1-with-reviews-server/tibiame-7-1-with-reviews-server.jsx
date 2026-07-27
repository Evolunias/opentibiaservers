import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-1-with-reviews-server');
}

export default function Tibiame71WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-1-with-reviews-server" />;
}
