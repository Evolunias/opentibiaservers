import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-with-reviews-server-list');
}

export default function Tibia772WithReviewsServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-with-reviews-server-list" />;
}
