import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-11-pvp-server');
}

export default function Gunzodus11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-11-pvp-server" />;
}
