import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-custom-map-server-sweden');
}

export default function MarolaotCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="marolaot-custom-map-server-sweden" />;
}
