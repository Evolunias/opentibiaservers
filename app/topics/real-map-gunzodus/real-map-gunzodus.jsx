import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-gunzodus');
}

export default function RealMapGunzodusKeywordPage() {
  return <StaticKeywordPage slug="real-map-gunzodus" />;
}
