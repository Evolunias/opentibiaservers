import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-real-map-servers-north-america');
}

export default function MarolaotRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-real-map-servers-north-america" />;
}
