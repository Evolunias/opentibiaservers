import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-6-pvpe-server');
}

export default function Gunzodus86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-6-pvpe-server" />;
}
