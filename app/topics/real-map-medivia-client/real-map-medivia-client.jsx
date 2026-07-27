import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-medivia-client');
}

export default function RealMapMediviaClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-medivia-client" />;
}
