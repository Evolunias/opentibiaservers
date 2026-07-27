import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-non-pvp-server-sweden');
}

export default function GunzodusNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-non-pvp-server-sweden" />;
}
