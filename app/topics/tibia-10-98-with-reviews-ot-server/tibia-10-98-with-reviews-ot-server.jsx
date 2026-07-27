import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-with-reviews-ot-server');
}

export default function Tibia1098WithReviewsOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-with-reviews-ot-server" />;
}
