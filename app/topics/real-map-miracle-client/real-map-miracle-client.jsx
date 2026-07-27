import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-miracle-client');
}

export default function RealMapMiracleClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-miracle-client" />;
}
