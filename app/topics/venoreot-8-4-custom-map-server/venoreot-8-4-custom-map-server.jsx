import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-4-custom-map-server');
}

export default function Venoreot84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-4-custom-map-server" />;
}
