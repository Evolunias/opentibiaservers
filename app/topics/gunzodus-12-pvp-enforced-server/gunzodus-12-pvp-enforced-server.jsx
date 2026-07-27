import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-12-pvp-enforced-server');
}

export default function Gunzodus12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-12-pvp-enforced-server" />;
}
