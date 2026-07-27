import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-1-custom-map-servers');
}

export default function Marolaot81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-1-custom-map-servers" />;
}
