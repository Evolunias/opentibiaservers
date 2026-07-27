import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-originaltibia');
}

export default function WithReviewsOriginaltibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-originaltibia" />;
}
