import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibijka-servers');
}

export default function RealMapTibijkaServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibijka-servers" />;
}
