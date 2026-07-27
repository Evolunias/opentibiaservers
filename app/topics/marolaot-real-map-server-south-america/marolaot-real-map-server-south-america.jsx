import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-real-map-server-south-america');
}

export default function MarolaotRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-real-map-server-south-america" />;
}
