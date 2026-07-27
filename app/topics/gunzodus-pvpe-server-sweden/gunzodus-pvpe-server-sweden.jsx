import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvpe-server-sweden');
}

export default function GunzodusPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvpe-server-sweden" />;
}
