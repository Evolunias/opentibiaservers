import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-7-6-custom-map-servers');
}

export default function Marolaot76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="marolaot-7-6-custom-map-servers" />;
}
