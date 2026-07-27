import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-seasonal-server-sweden');
}

export default function GunzodusSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-seasonal-server-sweden" />;
}
