import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-7-1-custom-map-servers');
}

export default function Marolaot71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="marolaot-7-1-custom-map-servers" />;
}
