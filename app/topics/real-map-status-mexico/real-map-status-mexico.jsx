import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-status-mexico');
}

export default function RealMapStatusMexicoKeywordPage() {
  return <StaticKeywordPage slug="real-map-status-mexico" />;
}
