import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-10-0-pvp-enforced-server');
}

export default function Gunzodus100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-10-0-pvp-enforced-server" />;
}
