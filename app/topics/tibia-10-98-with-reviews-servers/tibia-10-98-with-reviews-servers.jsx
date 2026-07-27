import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-with-reviews-servers');
}

export default function Tibia1098WithReviewsServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-with-reviews-servers" />;
}
