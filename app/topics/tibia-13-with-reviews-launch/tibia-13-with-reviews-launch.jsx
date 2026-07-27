import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-reviews-launch');
}

export default function Tibia13WithReviewsLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-reviews-launch" />;
}
