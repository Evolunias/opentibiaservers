import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-15-custom-map-server');
}

export default function Marolaot15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-15-custom-map-server" />;
}
