import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-baiak-ilusion-website');
}

export default function WithReviewsBaiakIlusionWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-baiak-ilusion-website" />;
}
