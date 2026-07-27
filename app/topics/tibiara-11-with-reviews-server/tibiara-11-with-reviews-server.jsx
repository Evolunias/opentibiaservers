import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-11-with-reviews-server');
}

export default function Tibiara11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-11-with-reviews-server" />;
}
