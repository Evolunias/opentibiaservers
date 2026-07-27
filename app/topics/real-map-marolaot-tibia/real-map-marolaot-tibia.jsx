import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-marolaot-tibia');
}

export default function RealMapMarolaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-marolaot-tibia" />;
}
