import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-reviews-launch');
}

export default function Tibia11WithReviewsLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-reviews-launch" />;
}
