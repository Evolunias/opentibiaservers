import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-neprenia-open-tibia');
}

export default function WithReviewsNepreniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-neprenia-open-tibia" />;
}
