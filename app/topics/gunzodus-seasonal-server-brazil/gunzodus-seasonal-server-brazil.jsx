import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-seasonal-server-brazil');
}

export default function GunzodusSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-seasonal-server-brazil" />;
}
