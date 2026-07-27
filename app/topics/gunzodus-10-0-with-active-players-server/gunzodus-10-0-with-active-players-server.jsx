import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-10-0-with-active-players-server');
}

export default function Gunzodus100WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-10-0-with-active-players-server" />;
}
