import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-11-custom-map-servers');
}

export default function Venoreot11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="venoreot-11-custom-map-servers" />;
}
