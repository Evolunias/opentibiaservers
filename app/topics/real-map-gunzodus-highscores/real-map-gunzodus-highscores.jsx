import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-gunzodus-highscores');
}

export default function RealMapGunzodusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-gunzodus-highscores" />;
}
