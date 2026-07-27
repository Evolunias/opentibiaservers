import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-seasonal-server-latin-america');
}

export default function GunzodusSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-seasonal-server-latin-america" />;
}
