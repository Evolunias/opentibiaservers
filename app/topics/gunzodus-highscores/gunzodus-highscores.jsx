import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-highscores');
}

export default function GunzodusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-highscores" />;
}
