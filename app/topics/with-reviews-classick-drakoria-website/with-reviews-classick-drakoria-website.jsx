import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classick-drakoria-website');
}

export default function WithReviewsClassickDrakoriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classick-drakoria-website" />;
}
