import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-high-exp-server-reviews');
}

export default function TibiaHighExpServerReviewsKeywordPage() {
  return <StaticKeywordPage slug="tibia-high-exp-server-reviews" />;
}
