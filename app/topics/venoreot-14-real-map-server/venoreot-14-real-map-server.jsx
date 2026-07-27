import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-14-real-map-server');
}

export default function Venoreot14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-14-real-map-server" />;
}
