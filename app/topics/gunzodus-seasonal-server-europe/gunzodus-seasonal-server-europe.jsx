import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-seasonal-server-europe');
}

export default function GunzodusSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-seasonal-server-europe" />;
}
