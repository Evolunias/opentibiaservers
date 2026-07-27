import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-reviews-servers');
}

export default function Tibia12WithReviewsServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-reviews-servers" />;
}
