import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-gunzodus-ots');
}

export default function RealMapGunzodusOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-gunzodus-ots" />;
}
