import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-saintsot-open-tibia');
}

export default function RealMapSaintsotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-saintsot-open-tibia" />;
}
