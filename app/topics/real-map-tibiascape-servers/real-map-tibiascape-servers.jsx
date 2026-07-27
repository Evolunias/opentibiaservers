import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiascape-servers');
}

export default function RealMapTibiascapeServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiascape-servers" />;
}
