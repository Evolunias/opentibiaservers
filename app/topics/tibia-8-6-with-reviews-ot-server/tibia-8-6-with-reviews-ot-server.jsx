import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-with-reviews-ot-server');
}

export default function Tibia86WithReviewsOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-with-reviews-ot-server" />;
}
