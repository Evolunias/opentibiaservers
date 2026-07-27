import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-luminera-private-server');
}

export default function RealMapLumineraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-luminera-private-server" />;
}
