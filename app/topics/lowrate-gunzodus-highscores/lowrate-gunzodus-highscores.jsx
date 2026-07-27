import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-gunzodus-highscores');
}

export default function LowrateGunzodusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-gunzodus-highscores" />;
}
