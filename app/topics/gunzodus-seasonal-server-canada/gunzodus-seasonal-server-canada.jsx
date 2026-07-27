import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-seasonal-server-canada');
}

export default function GunzodusSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-seasonal-server-canada" />;
}
