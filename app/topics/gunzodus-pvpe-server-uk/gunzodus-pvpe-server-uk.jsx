import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvpe-server-uk');
}

export default function GunzodusPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvpe-server-uk" />;
}
