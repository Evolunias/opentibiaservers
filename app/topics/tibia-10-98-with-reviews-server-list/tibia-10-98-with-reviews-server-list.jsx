import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-with-reviews-server-list');
}

export default function Tibia1098WithReviewsServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-with-reviews-server-list" />;
}
