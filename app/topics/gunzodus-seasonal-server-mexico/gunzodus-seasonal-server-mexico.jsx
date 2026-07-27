import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-seasonal-server-mexico');
}

export default function GunzodusSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-seasonal-server-mexico" />;
}
