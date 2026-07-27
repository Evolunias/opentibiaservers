import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-9-6-pvp-enforced-server');
}

export default function Gunzodus96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-9-6-pvp-enforced-server" />;
}
