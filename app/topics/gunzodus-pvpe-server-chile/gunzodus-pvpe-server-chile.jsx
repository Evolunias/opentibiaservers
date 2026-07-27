import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvpe-server-chile');
}

export default function GunzodusPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvpe-server-chile" />;
}
