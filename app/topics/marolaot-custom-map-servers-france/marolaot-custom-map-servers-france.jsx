import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-custom-map-servers-france');
}

export default function MarolaotCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="marolaot-custom-map-servers-france" />;
}
