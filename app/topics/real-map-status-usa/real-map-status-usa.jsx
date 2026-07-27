import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-status-usa');
}

export default function RealMapStatusUsaKeywordPage() {
  return <StaticKeywordPage slug="real-map-status-usa" />;
}
