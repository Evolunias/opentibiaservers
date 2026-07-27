import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-10-0-custom-map-servers');
}

export default function Marolaot100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="marolaot-10-0-custom-map-servers" />;
}
