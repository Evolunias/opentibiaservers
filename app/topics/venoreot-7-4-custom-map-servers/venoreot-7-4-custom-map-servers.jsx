import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-7-4-custom-map-servers');
}

export default function Venoreot74CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="venoreot-7-4-custom-map-servers" />;
}
