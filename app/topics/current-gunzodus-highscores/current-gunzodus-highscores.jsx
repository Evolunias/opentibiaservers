import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-gunzodus-highscores');
}

export default function CurrentGunzodusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-gunzodus-highscores" />;
}
