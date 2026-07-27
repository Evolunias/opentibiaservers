import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-9-6-custom-map-servers');
}

export default function Venoreot96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="venoreot-9-6-custom-map-servers" />;
}
