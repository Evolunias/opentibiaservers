import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-status-canada');
}

export default function RealMapStatusCanadaKeywordPage() {
  return <StaticKeywordPage slug="real-map-status-canada" />;
}
