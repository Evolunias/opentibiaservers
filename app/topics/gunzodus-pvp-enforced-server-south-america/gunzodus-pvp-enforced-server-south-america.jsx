import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvp-enforced-server-south-america');
}

export default function GunzodusPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvp-enforced-server-south-america" />;
}
