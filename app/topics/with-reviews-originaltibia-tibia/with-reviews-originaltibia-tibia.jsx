import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-originaltibia-tibia');
}

export default function WithReviewsOriginaltibiaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-originaltibia-tibia" />;
}
