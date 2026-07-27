import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-seasonal-server-usa');
}

export default function GunzodusSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-seasonal-server-usa" />;
}
