import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-14-with-reviews-server');
}

export default function Tibiara14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-14-with-reviews-server" />;
}
