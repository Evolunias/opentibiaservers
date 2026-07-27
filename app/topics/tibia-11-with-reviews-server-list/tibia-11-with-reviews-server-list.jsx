import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-reviews-server-list');
}

export default function Tibia11WithReviewsServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-reviews-server-list" />;
}
