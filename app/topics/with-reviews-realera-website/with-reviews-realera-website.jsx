import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realera-website');
}

export default function WithReviewsRealeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realera-website" />;
}
