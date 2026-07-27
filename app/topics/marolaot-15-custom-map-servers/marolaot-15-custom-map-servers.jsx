import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-15-custom-map-servers');
}

export default function Marolaot15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="marolaot-15-custom-map-servers" />;
}
