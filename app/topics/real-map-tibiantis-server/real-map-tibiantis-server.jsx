import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiantis-server');
}

export default function RealMapTibiantisServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiantis-server" />;
}
