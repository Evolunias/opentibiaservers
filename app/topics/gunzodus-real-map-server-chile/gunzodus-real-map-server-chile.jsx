import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-real-map-server-chile');
}

export default function GunzodusRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-real-map-server-chile" />;
}
