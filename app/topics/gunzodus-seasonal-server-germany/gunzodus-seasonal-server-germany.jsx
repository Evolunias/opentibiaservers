import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-seasonal-server-germany');
}

export default function GunzodusSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-seasonal-server-germany" />;
}
