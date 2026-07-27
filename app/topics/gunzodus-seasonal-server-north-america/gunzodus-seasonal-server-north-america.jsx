import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-seasonal-server-north-america');
}

export default function GunzodusSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-seasonal-server-north-america" />;
}
