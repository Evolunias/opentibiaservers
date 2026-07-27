import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvpe-server-usa');
}

export default function GunzodusPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvpe-server-usa" />;
}
