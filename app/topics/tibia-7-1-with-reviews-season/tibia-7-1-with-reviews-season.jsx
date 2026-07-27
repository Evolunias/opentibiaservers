import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-with-reviews-season');
}

export default function Tibia71WithReviewsSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-with-reviews-season" />;
}
