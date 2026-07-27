import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-arcaniarl-forum');
}

export default function WithReviewsArcaniarlForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-arcaniarl-forum" />;
}
