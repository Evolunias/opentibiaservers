import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-custom-map-server-argentina');
}

export default function MarolaotCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-custom-map-server-argentina" />;
}
