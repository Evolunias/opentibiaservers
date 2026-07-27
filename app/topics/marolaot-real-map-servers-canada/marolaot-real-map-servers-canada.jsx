import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-real-map-servers-canada');
}

export default function MarolaotRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-real-map-servers-canada" />;
}
