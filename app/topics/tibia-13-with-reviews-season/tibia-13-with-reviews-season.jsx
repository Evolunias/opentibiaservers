import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-reviews-season');
}

export default function Tibia13WithReviewsSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-reviews-season" />;
}
