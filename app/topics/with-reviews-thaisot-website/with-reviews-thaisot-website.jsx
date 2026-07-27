import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thaisot-website');
}

export default function WithReviewsThaisotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thaisot-website" />;
}
