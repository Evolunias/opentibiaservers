import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-4-custom-map-servers');
}

export default function Marolaot84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-4-custom-map-servers" />;
}
