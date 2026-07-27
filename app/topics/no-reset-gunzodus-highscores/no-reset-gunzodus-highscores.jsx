import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-gunzodus-highscores');
}

export default function NoResetGunzodusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-gunzodus-highscores" />;
}
