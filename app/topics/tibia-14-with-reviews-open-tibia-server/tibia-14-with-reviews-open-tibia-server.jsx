import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-reviews-open-tibia-server');
}

export default function Tibia14WithReviewsOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-reviews-open-tibia-server" />;
}
