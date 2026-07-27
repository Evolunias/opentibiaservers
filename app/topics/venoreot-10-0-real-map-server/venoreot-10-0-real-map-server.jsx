import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-10-0-real-map-server');
}

export default function Venoreot100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-10-0-real-map-server" />;
}
