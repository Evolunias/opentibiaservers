import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-6-real-map-server');
}

export default function Venoreot86RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-6-real-map-server" />;
}
