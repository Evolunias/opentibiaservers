import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-6-with-reviews-server');
}

export default function Tibiara86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-6-with-reviews-server" />;
}
