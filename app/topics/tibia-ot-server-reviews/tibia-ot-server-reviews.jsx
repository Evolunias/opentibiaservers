import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-ot-server-reviews');
}

export default function TibiaOtServerReviewsKeywordPage() {
  return <StaticKeywordPage slug="tibia-ot-server-reviews" />;
}
