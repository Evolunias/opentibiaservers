import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-kasteria-tibia');
}

export default function WithReviewsKasteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-kasteria-tibia" />;
}
