import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-11-pvp-enforced-server');
}

export default function Gunzodus11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-11-pvp-enforced-server" />;
}
