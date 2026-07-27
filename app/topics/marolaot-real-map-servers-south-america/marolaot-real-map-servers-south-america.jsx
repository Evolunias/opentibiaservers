import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-real-map-servers-south-america');
}

export default function MarolaotRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-real-map-servers-south-america" />;
}
