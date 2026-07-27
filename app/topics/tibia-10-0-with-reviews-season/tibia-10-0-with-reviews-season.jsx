import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-with-reviews-season');
}

export default function Tibia100WithReviewsSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-with-reviews-season" />;
}
