import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-neprenia-tibia');
}

export default function WithReviewsNepreniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-neprenia-tibia" />;
}
