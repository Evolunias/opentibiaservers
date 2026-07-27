import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-imperianic');
}

export default function RealMapImperianicKeywordPage() {
  return <StaticKeywordPage slug="real-map-imperianic" />;
}
