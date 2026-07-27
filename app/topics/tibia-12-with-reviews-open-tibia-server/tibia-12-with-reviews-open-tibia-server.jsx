import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-reviews-open-tibia-server');
}

export default function Tibia12WithReviewsOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-reviews-open-tibia-server" />;
}
