import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-luminera-ot-server');
}

export default function RealMapLumineraOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-luminera-ot-server" />;
}
