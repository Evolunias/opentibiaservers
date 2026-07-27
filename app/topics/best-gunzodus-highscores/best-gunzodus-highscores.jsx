import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-gunzodus-highscores');
}

export default function BestGunzodusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-gunzodus-highscores" />;
}
