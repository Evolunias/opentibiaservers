import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-miracle-server');
}

export default function RealMapMiracleServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-miracle-server" />;
}
