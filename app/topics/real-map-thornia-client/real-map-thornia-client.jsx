import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thornia-client');
}

export default function RealMapThorniaClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-thornia-client" />;
}
