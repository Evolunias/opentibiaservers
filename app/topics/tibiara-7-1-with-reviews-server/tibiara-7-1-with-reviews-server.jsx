import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-1-with-reviews-server');
}

export default function Tibiara71WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-1-with-reviews-server" />;
}
