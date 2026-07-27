import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvpe-server-mexico');
}

export default function GunzodusPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvpe-server-mexico" />;
}
