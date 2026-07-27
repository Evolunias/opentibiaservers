import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-saintsot-tibia');
}

export default function RealMapSaintsotTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-saintsot-tibia" />;
}
