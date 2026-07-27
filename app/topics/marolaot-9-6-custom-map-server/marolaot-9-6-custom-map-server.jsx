import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-9-6-custom-map-server');
}

export default function Marolaot96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-9-6-custom-map-server" />;
}
