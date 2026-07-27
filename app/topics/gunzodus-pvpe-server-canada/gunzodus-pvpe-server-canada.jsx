import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvpe-server-canada');
}

export default function GunzodusPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvpe-server-canada" />;
}
