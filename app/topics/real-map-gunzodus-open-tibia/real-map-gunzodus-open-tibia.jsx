import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-gunzodus-open-tibia');
}

export default function RealMapGunzodusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-gunzodus-open-tibia" />;
}
