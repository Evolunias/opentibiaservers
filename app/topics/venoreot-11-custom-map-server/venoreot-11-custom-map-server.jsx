import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-11-custom-map-server');
}

export default function Venoreot11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-11-custom-map-server" />;
}
