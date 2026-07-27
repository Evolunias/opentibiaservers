import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-with-reviews-server');
}

export default function Tibia772WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-with-reviews-server" />;
}
