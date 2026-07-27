import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-real-map-servers-brazil');
}

export default function MarolaotRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="marolaot-real-map-servers-brazil" />;
}
