import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-demolidores-servers');
}

export default function RealMapDemolidoresServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-demolidores-servers" />;
}
