import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-carlinot-website');
}

export default function WithReviewsCarlinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-carlinot-website" />;
}
