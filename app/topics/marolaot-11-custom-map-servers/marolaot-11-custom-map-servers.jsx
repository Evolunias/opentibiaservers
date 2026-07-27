import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-11-custom-map-servers');
}

export default function Marolaot11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="marolaot-11-custom-map-servers" />;
}
