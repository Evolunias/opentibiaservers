import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-sabrehaven-guide');
}

export default function RealMapSabrehavenGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-sabrehaven-guide" />;
}
