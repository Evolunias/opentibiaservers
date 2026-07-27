import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvpe-server-brazil');
}

export default function GunzodusPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvpe-server-brazil" />;
}
