import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-12-pvp-server');
}

export default function Gunzodus12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-12-pvp-server" />;
}
