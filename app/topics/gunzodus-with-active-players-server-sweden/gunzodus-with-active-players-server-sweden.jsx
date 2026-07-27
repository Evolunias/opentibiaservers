import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-active-players-server-sweden');
}

export default function GunzodusWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-active-players-server-sweden" />;
}
