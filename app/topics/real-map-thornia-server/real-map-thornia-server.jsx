import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thornia-server');
}

export default function RealMapThorniaServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-thornia-server" />;
}
