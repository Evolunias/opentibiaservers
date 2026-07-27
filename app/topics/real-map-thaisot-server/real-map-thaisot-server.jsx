import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thaisot-server');
}

export default function RealMapThaisotServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-thaisot-server" />;
}
