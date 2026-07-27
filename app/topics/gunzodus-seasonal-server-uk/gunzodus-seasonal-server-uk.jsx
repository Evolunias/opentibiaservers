import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-seasonal-server-uk');
}

export default function GunzodusSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-seasonal-server-uk" />;
}
