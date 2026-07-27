import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-13-real-map-server');
}

export default function Venoreot13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-13-real-map-server" />;
}
