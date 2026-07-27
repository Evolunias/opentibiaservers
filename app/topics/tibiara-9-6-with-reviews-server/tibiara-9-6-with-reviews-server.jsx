import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-9-6-with-reviews-server');
}

export default function Tibiara96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-9-6-with-reviews-server" />;
}
