import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiantis');
}

export default function RealMapTibiantisKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiantis" />;
}
