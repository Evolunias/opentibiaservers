import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realesta-tibia');
}

export default function WithReviewsRealestaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realesta-tibia" />;
}
