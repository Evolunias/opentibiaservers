import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-status-south-america');
}

export default function RealMapStatusSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-status-south-america" />;
}
