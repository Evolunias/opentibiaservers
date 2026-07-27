import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-6-custom-map-servers');
}

export default function Venoreot86CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-6-custom-map-servers" />;
}
