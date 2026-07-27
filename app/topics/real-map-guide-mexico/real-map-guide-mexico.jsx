import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-guide-mexico');
}

export default function RealMapGuideMexicoKeywordPage() {
  return <StaticKeywordPage slug="real-map-guide-mexico" />;
}
