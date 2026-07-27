import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvp-enforced-server-canada');
}

export default function GunzodusPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvp-enforced-server-canada" />;
}
