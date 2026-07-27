import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-15-custom-map-servers');
}

export default function Venoreot15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="venoreot-15-custom-map-servers" />;
}
