import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-marolaot-server');
}

export default function CustomMapMarolaotServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-marolaot-server" />;
}
