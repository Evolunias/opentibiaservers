import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-gunzodus-highscores');
}

export default function CustomGunzodusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-gunzodus-highscores" />;
}
