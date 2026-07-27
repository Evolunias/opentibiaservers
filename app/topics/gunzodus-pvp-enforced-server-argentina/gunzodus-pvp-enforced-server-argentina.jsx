import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvp-enforced-server-argentina');
}

export default function GunzodusPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvp-enforced-server-argentina" />;
}
