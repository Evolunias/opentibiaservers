import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-4-pvpe-server');
}

export default function Gunzodus74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-4-pvpe-server" />;
}
