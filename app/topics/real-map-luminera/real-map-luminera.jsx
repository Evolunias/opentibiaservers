import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-luminera');
}

export default function RealMapLumineraKeywordPage() {
  return <StaticKeywordPage slug="real-map-luminera" />;
}
