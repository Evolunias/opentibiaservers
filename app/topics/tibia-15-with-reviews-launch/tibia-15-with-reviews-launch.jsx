import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-reviews-launch');
}

export default function Tibia15WithReviewsLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-reviews-launch" />;
}
