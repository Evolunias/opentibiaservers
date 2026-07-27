import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiantis-open-tibia');
}

export default function RealMapTibiantisOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiantis-open-tibia" />;
}
