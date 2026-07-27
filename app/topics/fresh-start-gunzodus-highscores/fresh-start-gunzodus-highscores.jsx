import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-gunzodus-highscores');
}

export default function FreshStartGunzodusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-gunzodus-highscores" />;
}
