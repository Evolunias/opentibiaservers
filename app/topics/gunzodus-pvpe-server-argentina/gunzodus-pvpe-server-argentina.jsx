import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvpe-server-argentina');
}

export default function GunzodusPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvpe-server-argentina" />;
}
