import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvpe-server-poland');
}

export default function GunzodusPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvpe-server-poland" />;
}
