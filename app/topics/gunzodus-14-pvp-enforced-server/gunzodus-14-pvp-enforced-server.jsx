import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-14-pvp-enforced-server');
}

export default function Gunzodus14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-14-pvp-enforced-server" />;
}
