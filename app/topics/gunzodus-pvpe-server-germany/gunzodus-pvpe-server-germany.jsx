import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvpe-server-germany');
}

export default function GunzodusPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvpe-server-germany" />;
}
