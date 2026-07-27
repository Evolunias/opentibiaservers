import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-gunzodus-tibia');
}

export default function RealMapGunzodusTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-gunzodus-tibia" />;
}
