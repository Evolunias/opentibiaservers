import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvpe-server-france');
}

export default function GunzodusPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvpe-server-france" />;
}
