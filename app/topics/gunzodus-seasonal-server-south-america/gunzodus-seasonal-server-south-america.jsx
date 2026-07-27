import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-seasonal-server-south-america');
}

export default function GunzodusSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-seasonal-server-south-america" />;
}
