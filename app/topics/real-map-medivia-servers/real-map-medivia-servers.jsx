import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-medivia-servers');
}

export default function RealMapMediviaServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-medivia-servers" />;
}
