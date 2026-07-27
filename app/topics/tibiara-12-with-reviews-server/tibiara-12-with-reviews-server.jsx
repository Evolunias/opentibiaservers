import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-12-with-reviews-server');
}

export default function Tibiara12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-12-with-reviews-server" />;
}
