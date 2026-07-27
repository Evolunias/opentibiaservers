import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-miracle');
}

export default function RealMapMiracleKeywordPage() {
  return <StaticKeywordPage slug="real-map-miracle" />;
}
