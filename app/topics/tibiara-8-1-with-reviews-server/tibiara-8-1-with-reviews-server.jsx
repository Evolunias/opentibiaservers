import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-1-with-reviews-server');
}

export default function Tibiara81WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-1-with-reviews-server" />;
}
