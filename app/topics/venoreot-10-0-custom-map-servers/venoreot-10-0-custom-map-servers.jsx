import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-10-0-custom-map-servers');
}

export default function Venoreot100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="venoreot-10-0-custom-map-servers" />;
}
