import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thornia-forum');
}

export default function WithReviewsThorniaForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thornia-forum" />;
}
