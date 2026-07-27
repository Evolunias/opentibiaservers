import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiascape-client');
}

export default function RealMapTibiascapeClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiascape-client" />;
}
