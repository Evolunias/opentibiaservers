import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-seasonal-server-poland');
}

export default function GunzodusSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-seasonal-server-poland" />;
}
