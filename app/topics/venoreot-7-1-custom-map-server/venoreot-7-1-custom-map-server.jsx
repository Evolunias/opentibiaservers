import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-7-1-custom-map-server');
}

export default function Venoreot71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-7-1-custom-map-server" />;
}
