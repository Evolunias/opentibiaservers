import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-10-98-with-reviews-server');
}

export default function Tibiame1098WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-10-98-with-reviews-server" />;
}
