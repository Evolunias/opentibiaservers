import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-reviews-launch');
}

export default function Tibia14WithReviewsLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-reviews-launch" />;
}
