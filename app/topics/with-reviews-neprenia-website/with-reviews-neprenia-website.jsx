import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-neprenia-website');
}

export default function WithReviewsNepreniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-neprenia-website" />;
}
