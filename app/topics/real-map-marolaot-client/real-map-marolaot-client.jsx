import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-marolaot-client');
}

export default function RealMapMarolaotClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-marolaot-client" />;
}
