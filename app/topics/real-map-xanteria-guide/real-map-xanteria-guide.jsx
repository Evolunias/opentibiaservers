import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-xanteria-guide');
}

export default function RealMapXanteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-xanteria-guide" />;
}
