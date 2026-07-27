import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-miracle-servers');
}

export default function RealMapMiracleServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-miracle-servers" />;
}
