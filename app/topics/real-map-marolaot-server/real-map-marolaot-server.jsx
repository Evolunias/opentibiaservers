import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-marolaot-server');
}

export default function RealMapMarolaotServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-marolaot-server" />;
}
