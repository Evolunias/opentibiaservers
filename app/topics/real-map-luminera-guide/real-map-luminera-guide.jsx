import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-luminera-guide');
}

export default function RealMapLumineraGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-luminera-guide" />;
}
