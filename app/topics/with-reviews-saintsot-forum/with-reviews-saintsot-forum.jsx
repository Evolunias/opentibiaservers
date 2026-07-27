import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-saintsot-forum');
}

export default function WithReviewsSaintsotForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-saintsot-forum" />;
}
