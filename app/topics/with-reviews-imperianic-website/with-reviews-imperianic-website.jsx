import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-imperianic-website');
}

export default function WithReviewsImperianicWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-imperianic-website" />;
}
