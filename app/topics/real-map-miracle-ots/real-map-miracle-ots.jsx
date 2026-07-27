import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-miracle-ots');
}

export default function RealMapMiracleOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-miracle-ots" />;
}
