import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-with-reviews-server-list');
}

export default function Tibia86WithReviewsServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-with-reviews-server-list" />;
}
