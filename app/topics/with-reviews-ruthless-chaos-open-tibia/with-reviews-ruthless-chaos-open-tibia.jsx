import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ruthless-chaos-open-tibia');
}

export default function WithReviewsRuthlessChaosOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ruthless-chaos-open-tibia" />;
}
