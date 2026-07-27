import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-custom-map-servers-chile');
}

export default function GunzodusCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-custom-map-servers-chile" />;
}
