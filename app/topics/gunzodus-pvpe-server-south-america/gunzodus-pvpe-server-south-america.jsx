import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvpe-server-south-america');
}

export default function GunzodusPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvpe-server-south-america" />;
}
