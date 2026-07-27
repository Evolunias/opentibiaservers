import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-shadowcores-tibia');
}

export default function WithReviewsShadowcoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-shadowcores-tibia" />;
}
