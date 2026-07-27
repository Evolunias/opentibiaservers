import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-13-with-active-players-server');
}

export default function Gunzodus13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-13-with-active-players-server" />;
}
