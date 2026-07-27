import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-6-pvpe-server');
}

export default function Gunzodus76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-6-pvpe-server" />;
}
