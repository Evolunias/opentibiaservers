import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-4-pvp-enforced-server');
}

export default function Gunzodus84PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-4-pvp-enforced-server" />;
}
