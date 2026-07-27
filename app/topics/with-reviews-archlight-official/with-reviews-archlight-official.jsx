import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-archlight-official');
}

export default function WithReviewsArchlightOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-archlight-official" />;
}
