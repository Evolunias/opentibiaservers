import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-10-98-custom-map-servers');
}

export default function Venoreot1098CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="venoreot-10-98-custom-map-servers" />;
}
