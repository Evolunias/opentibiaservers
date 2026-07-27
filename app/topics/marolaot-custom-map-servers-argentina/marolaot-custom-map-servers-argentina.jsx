import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-custom-map-servers-argentina');
}

export default function MarolaotCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-custom-map-servers-argentina" />;
}
