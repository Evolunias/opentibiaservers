import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-gunzodus-forum');
}

export default function WithReviewsGunzodusForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-gunzodus-forum" />;
}
