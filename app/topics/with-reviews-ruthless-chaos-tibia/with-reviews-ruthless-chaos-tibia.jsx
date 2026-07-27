import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ruthless-chaos-tibia');
}

export default function WithReviewsRuthlessChaosTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ruthless-chaos-tibia" />;
}
