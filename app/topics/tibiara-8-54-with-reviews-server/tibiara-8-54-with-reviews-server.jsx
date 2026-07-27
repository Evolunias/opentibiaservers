import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-54-with-reviews-server');
}

export default function Tibiara854WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-54-with-reviews-server" />;
}
