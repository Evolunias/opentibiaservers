import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-13-custom-map-servers');
}

export default function Venoreot13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="venoreot-13-custom-map-servers" />;
}
