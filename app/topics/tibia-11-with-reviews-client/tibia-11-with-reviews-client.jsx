import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-reviews-client');
}

export default function Tibia11WithReviewsClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-reviews-client" />;
}
