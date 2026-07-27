import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-reviews-server');
}

export default function Tibia15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-reviews-server" />;
}
