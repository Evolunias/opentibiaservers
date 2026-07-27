import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-gunzodus-server');
}

export default function SeasonalGunzodusServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-gunzodus-server" />;
}
