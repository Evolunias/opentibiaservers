import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-with-reviews-launch');
}

export default function Tibia84WithReviewsLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-with-reviews-launch" />;
}
