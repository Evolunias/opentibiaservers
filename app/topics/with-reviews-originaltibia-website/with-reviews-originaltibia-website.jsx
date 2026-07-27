import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-originaltibia-website');
}

export default function WithReviewsOriginaltibiaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-originaltibia-website" />;
}
