import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-gunzodus-rules');
}

export default function WithReviewsGunzodusRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-gunzodus-rules" />;
}
