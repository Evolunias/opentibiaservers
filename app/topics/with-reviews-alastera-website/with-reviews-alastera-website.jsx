import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-alastera-website');
}

export default function WithReviewsAlasteraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-alastera-website" />;
}
