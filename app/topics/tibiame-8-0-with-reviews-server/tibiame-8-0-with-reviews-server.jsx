import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-0-with-reviews-server');
}

export default function Tibiame80WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-0-with-reviews-server" />;
}
