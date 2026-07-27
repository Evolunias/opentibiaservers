import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-with-reviews-servers');
}

export default function Tibia80WithReviewsServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-with-reviews-servers" />;
}
