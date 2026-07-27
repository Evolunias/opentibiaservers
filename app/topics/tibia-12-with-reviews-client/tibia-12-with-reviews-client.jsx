import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-reviews-client');
}

export default function Tibia12WithReviewsClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-reviews-client" />;
}
