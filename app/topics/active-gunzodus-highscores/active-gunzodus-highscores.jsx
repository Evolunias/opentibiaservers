import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-gunzodus-highscores');
}

export default function ActiveGunzodusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-gunzodus-highscores" />;
}
