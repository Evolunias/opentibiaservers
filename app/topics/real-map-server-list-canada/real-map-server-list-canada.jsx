import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-server-list-canada');
}

export default function RealMapServerListCanadaKeywordPage() {
  return <StaticKeywordPage slug="real-map-server-list-canada" />;
}
