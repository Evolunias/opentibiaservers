import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-luminera-servers');
}

export default function RealMapLumineraServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-luminera-servers" />;
}
