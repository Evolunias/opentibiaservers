import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-12-real-map-server');
}

export default function Venoreot12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-12-real-map-server" />;
}
