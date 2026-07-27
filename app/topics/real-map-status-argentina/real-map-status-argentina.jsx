import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-status-argentina');
}

export default function RealMapStatusArgentinaKeywordPage() {
  return <StaticKeywordPage slug="real-map-status-argentina" />;
}
