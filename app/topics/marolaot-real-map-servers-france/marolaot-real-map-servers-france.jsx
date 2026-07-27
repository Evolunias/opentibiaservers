import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-real-map-servers-france');
}

export default function MarolaotRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="marolaot-real-map-servers-france" />;
}
