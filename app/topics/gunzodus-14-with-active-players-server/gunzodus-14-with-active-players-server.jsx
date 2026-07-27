import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-14-with-active-players-server');
}

export default function Gunzodus14WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-14-with-active-players-server" />;
}
