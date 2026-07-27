import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-6-with-reviews-server');
}

export default function Tibiara76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-6-with-reviews-server" />;
}
