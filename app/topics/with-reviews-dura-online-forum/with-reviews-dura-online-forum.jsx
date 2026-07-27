import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-dura-online-forum');
}

export default function WithReviewsDuraOnlineForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-dura-online-forum" />;
}
