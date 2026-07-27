import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-6-pvp-enforced-server');
}

export default function Gunzodus86PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-6-pvp-enforced-server" />;
}
