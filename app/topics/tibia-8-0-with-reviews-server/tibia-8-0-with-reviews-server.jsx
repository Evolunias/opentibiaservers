import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-with-reviews-server');
}

export default function Tibia80WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-with-reviews-server" />;
}
