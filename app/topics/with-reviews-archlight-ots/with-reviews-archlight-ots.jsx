import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-archlight-ots');
}

export default function WithReviewsArchlightOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-archlight-ots" />;
}
