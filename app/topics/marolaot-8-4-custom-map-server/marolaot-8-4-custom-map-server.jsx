import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-4-custom-map-server');
}

export default function Marolaot84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-4-custom-map-server" />;
}
