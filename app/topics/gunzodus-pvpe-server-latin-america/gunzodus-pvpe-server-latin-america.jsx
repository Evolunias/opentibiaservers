import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvpe-server-latin-america');
}

export default function GunzodusPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvpe-server-latin-america" />;
}
