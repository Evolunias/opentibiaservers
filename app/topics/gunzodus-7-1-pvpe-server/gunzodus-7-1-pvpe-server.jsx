import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-1-pvpe-server');
}

export default function Gunzodus71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-1-pvpe-server" />;
}
