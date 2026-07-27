import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-13-pvpe-server');
}

export default function Gunzodus13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-13-pvpe-server" />;
}
