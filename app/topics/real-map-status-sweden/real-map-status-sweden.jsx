import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-status-sweden');
}

export default function RealMapStatusSwedenKeywordPage() {
  return <StaticKeywordPage slug="real-map-status-sweden" />;
}
