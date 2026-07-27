import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-with-reviews-ot-server');
}

export default function Tibia76WithReviewsOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-with-reviews-ot-server" />;
}
