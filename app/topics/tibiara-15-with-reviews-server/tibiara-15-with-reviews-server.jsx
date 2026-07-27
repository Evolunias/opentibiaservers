import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-15-with-reviews-server');
}

export default function Tibiara15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-15-with-reviews-server" />;
}
