import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-1-pvp-enforced-server');
}

export default function Gunzodus71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-1-pvp-enforced-server" />;
}
