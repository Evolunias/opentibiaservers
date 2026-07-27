import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-miracle-guide');
}

export default function RealMapMiracleGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-miracle-guide" />;
}
