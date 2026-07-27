import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-marolaot-servers');
}

export default function CustomMapMarolaotServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-marolaot-servers" />;
}
