import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-evo-server-sweden');
}

export default function GunzodusEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-evo-server-sweden" />;
}
