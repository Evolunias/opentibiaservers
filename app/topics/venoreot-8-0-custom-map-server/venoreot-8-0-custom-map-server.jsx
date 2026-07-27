import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-0-custom-map-server');
}

export default function Venoreot80CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-0-custom-map-server" />;
}
