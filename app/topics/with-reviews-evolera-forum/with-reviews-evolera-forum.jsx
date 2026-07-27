import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolera-forum');
}

export default function WithReviewsEvoleraForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolera-forum" />;
}
