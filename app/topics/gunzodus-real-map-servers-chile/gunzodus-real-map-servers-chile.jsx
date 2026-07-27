import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-real-map-servers-chile');
}

export default function GunzodusRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-real-map-servers-chile" />;
}
