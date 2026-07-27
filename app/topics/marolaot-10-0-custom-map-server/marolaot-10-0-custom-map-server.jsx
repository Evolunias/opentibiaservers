import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-10-0-custom-map-server');
}

export default function Marolaot100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-10-0-custom-map-server" />;
}
