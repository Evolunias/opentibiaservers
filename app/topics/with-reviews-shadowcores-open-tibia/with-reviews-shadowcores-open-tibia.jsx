import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-shadowcores-open-tibia');
}

export default function WithReviewsShadowcoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-shadowcores-open-tibia" />;
}
