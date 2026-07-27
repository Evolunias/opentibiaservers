import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-with-reviews-season');
}

export default function Tibia1098WithReviewsSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-with-reviews-season" />;
}
