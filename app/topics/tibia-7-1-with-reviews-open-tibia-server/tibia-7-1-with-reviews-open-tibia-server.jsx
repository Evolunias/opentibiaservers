import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-with-reviews-open-tibia-server');
}

export default function Tibia71WithReviewsOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-with-reviews-open-tibia-server" />;
}
