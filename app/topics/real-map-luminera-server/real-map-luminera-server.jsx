import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-luminera-server');
}

export default function RealMapLumineraServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-luminera-server" />;
}
