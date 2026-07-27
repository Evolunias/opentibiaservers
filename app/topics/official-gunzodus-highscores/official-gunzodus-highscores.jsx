import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-gunzodus-highscores');
}

export default function OfficialGunzodusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-gunzodus-highscores" />;
}
