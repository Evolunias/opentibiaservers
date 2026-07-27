import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-4-with-reviews-server');
}

export default function Tibiara74WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-4-with-reviews-server" />;
}
