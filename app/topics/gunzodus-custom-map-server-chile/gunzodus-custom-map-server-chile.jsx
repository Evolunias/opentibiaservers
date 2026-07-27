import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-custom-map-server-chile');
}

export default function GunzodusCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-custom-map-server-chile" />;
}
