import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ruthless-chaos-forum');
}

export default function WithReviewsRuthlessChaosForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ruthless-chaos-forum" />;
}
