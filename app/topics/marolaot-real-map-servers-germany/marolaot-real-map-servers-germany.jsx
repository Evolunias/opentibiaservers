import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-real-map-servers-germany');
}

export default function MarolaotRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="marolaot-real-map-servers-germany" />;
}
