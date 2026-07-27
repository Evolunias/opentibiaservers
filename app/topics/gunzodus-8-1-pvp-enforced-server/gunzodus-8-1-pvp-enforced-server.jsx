import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-1-pvp-enforced-server');
}

export default function Gunzodus81PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-1-pvp-enforced-server" />;
}
