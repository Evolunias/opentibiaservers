import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-reviews-client');
}

export default function Tibia13WithReviewsClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-reviews-client" />;
}
