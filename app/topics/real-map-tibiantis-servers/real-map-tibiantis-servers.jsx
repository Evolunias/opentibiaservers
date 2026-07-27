import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiantis-servers');
}

export default function RealMapTibiantisServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiantis-servers" />;
}
