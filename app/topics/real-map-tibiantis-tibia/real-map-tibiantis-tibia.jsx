import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiantis-tibia');
}

export default function RealMapTibiantisTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiantis-tibia" />;
}
