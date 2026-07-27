import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realesta-website');
}

export default function WithReviewsRealestaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realesta-website" />;
}
