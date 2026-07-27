import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-carlinot-server');
}

export default function RealMapCarlinotServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-carlinot-server" />;
}
