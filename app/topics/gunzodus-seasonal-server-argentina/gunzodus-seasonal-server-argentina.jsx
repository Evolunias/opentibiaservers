import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-seasonal-server-argentina');
}

export default function GunzodusSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-seasonal-server-argentina" />;
}
