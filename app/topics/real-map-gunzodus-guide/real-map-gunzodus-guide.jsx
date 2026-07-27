import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-gunzodus-guide');
}

export default function RealMapGunzodusGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-gunzodus-guide" />;
}
