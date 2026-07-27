import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-gunzodus-highscores');
}

export default function TopGunzodusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-gunzodus-highscores" />;
}
