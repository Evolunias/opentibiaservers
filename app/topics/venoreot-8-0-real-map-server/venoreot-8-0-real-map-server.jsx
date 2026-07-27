import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-0-real-map-server');
}

export default function Venoreot80RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-0-real-map-server" />;
}
