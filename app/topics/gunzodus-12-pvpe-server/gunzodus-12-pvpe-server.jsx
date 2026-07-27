import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-12-pvpe-server');
}

export default function Gunzodus12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-12-pvpe-server" />;
}
