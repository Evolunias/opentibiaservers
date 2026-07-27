import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiantis-client');
}

export default function RealMapTibiantisClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiantis-client" />;
}
