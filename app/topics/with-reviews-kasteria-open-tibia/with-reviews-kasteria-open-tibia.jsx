import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-kasteria-open-tibia');
}

export default function WithReviewsKasteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-kasteria-open-tibia" />;
}
