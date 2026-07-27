import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-gunzodus-highscores');
}

export default function NewGunzodusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-gunzodus-highscores" />;
}
