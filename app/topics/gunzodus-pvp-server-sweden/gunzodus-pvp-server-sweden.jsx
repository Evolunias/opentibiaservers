import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvp-server-sweden');
}

export default function GunzodusPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvp-server-sweden" />;
}
