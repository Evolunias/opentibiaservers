import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-archlight-website');
}

export default function WithReviewsArchlightWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-archlight-website" />;
}
