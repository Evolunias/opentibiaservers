import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-gunzodus-login');
}

export default function RealMapGunzodusLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-gunzodus-login" />;
}
