import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiantis-ots');
}

export default function RealMapTibiantisOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiantis-ots" />;
}
