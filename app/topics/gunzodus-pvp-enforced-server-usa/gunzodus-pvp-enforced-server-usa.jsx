import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvp-enforced-server-usa');
}

export default function GunzodusPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvp-enforced-server-usa" />;
}
