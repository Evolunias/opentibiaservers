import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-luminera-client');
}

export default function RealMapLumineraClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-luminera-client" />;
}
