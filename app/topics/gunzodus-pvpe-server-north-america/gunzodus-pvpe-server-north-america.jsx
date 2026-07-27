import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvpe-server-north-america');
}

export default function GunzodusPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvpe-server-north-america" />;
}
