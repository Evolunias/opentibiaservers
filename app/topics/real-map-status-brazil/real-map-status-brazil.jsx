import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-status-brazil');
}

export default function RealMapStatusBrazilKeywordPage() {
  return <StaticKeywordPage slug="real-map-status-brazil" />;
}
