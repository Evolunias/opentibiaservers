import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-miracle-ot');
}

export default function RealMapMiracleOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-miracle-ot" />;
}
