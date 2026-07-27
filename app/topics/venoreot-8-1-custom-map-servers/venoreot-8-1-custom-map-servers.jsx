import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-1-custom-map-servers');
}

export default function Venoreot81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-1-custom-map-servers" />;
}
