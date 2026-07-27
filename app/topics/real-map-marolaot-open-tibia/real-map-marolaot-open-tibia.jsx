import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-marolaot-open-tibia');
}

export default function RealMapMarolaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-marolaot-open-tibia" />;
}
