import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-gunzodus-register');
}

export default function RealMapGunzodusRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-gunzodus-register" />;
}
