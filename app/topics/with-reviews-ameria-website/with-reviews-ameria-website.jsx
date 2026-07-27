import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ameria-website');
}

export default function WithReviewsAmeriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ameria-website" />;
}
