import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classick-drakoria-forum');
}

export default function WithReviewsClassickDrakoriaForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classick-drakoria-forum" />;
}
