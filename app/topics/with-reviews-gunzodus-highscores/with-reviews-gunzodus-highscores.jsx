import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-gunzodus-highscores');
}

export default function WithReviewsGunzodusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-gunzodus-highscores" />;
}
