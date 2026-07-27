import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-12-custom-map-servers');
}

export default function Marolaot12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="marolaot-12-custom-map-servers" />;
}
