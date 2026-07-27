import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-status-north-america');
}

export default function RealMapStatusNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-status-north-america" />;
}
