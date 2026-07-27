import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-10-98-with-reviews-server');
}

export default function Tibiara1098WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-10-98-with-reviews-server" />;
}
