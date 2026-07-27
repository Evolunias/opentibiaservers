import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-gunzodus-highscores');
}

export default function NewSeasonGunzodusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-gunzodus-highscores" />;
}
