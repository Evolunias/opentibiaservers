import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvp-enforced-server-sweden');
}

export default function GunzodusPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvp-enforced-server-sweden" />;
}
