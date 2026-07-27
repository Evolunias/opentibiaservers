import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-gunzodus-server');
}

export default function WithActivePlayersGunzodusServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-gunzodus-server" />;
}
