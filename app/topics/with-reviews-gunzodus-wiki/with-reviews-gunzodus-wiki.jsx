import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-gunzodus-wiki');
}

export default function WithReviewsGunzodusWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-gunzodus-wiki" />;
}
