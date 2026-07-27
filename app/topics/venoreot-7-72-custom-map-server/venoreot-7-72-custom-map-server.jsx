import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-7-72-custom-map-server');
}

export default function Venoreot772CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-7-72-custom-map-server" />;
}
