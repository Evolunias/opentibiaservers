import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-archlight-forum');
}

export default function WithReviewsArchlightForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-archlight-forum" />;
}
