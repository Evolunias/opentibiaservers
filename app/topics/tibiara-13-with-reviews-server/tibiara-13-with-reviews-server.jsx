import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-13-with-reviews-server');
}

export default function Tibiara13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-13-with-reviews-server" />;
}
