import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-11-custom-map-server');
}

export default function Marolaot11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-11-custom-map-server" />;
}
