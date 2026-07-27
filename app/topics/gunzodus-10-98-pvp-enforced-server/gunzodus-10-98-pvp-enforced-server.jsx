import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-10-98-pvp-enforced-server');
}

export default function Gunzodus1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-10-98-pvp-enforced-server" />;
}
