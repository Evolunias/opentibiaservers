import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-medivia-server');
}

export default function RealMapMediviaServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-medivia-server" />;
}
