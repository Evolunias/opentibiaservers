import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thaisot-servers');
}

export default function RealMapThaisotServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-thaisot-servers" />;
}
