import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-14-custom-map-servers');
}

export default function Marolaot14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="marolaot-14-custom-map-servers" />;
}
