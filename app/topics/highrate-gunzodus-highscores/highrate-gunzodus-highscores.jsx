import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-gunzodus-highscores');
}

export default function HighrateGunzodusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-gunzodus-highscores" />;
}
