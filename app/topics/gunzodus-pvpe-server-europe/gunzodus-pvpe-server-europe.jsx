import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvpe-server-europe');
}

export default function GunzodusPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvpe-server-europe" />;
}
