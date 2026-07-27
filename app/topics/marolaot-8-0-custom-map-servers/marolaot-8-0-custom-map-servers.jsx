import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-0-custom-map-servers');
}

export default function Marolaot80CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-0-custom-map-servers" />;
}
