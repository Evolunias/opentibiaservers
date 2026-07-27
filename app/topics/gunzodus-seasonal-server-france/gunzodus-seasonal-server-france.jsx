import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-seasonal-server-france');
}

export default function GunzodusSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-seasonal-server-france" />;
}
