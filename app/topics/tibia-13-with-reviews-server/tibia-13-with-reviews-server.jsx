import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-reviews-server');
}

export default function Tibia13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-reviews-server" />;
}
