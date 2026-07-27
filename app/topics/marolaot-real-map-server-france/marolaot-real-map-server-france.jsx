import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-real-map-server-france');
}

export default function MarolaotRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="marolaot-real-map-server-france" />;
}
