import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-6-custom-map-servers');
}

export default function Marolaot86CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-6-custom-map-servers" />;
}
