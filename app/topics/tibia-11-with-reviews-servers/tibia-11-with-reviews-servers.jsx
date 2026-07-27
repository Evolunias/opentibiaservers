import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-reviews-servers');
}

export default function Tibia11WithReviewsServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-reviews-servers" />;
}
