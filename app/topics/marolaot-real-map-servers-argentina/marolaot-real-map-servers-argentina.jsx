import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-real-map-servers-argentina');
}

export default function MarolaotRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-real-map-servers-argentina" />;
}
