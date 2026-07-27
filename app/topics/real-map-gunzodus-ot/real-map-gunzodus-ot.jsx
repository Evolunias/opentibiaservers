import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-gunzodus-ot');
}

export default function RealMapGunzodusOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-gunzodus-ot" />;
}
