import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-12-with-active-players-server');
}

export default function Gunzodus12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-12-with-active-players-server" />;
}
