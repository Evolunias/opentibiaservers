import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-status-poland');
}

export default function RealMapStatusPolandKeywordPage() {
  return <StaticKeywordPage slug="real-map-status-poland" />;
}
