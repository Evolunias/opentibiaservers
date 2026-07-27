import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-gunzodus-highscores');
}

export default function PopularGunzodusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-gunzodus-highscores" />;
}
