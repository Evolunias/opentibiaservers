import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-gunzodus-discord');
}

export default function WithReviewsGunzodusDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-gunzodus-discord" />;
}
