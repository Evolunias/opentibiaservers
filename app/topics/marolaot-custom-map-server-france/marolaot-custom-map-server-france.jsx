import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-custom-map-server-france');
}

export default function MarolaotCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="marolaot-custom-map-server-france" />;
}
