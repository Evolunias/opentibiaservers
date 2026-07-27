import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-demolidores-client');
}

export default function RealMapDemolidoresClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-demolidores-client" />;
}
