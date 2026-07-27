import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-14-custom-map-servers');
}

export default function Venoreot14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="venoreot-14-custom-map-servers" />;
}
