import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-seasonal-server-chile');
}

export default function GunzodusSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-seasonal-server-chile" />;
}
