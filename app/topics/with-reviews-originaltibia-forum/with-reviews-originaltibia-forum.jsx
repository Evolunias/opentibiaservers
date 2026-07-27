import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-originaltibia-forum');
}

export default function WithReviewsOriginaltibiaForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-originaltibia-forum" />;
}
