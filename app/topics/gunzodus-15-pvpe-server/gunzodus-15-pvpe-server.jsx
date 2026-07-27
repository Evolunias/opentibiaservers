import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-15-pvpe-server');
}

export default function Gunzodus15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-15-pvpe-server" />;
}
