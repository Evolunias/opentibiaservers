import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvp-enforced-server-north-america');
}

export default function GunzodusPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvp-enforced-server-north-america" />;
}
