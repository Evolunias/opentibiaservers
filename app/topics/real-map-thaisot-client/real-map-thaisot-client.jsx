import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thaisot-client');
}

export default function RealMapThaisotClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-thaisot-client" />;
}
