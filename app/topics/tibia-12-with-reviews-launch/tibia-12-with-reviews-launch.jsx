import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-reviews-launch');
}

export default function Tibia12WithReviewsLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-reviews-launch" />;
}
