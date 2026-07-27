import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-custom-server-reviews');
}

export default function TibiaCustomServerReviewsKeywordPage() {
  return <StaticKeywordPage slug="tibia-custom-server-reviews" />;
}
