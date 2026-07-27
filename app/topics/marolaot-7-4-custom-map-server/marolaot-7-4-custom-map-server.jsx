import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-7-4-custom-map-server');
}

export default function Marolaot74CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-7-4-custom-map-server" />;
}
