import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvpe');
}

export default function GunzodusPvpeKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvpe" />;
}
