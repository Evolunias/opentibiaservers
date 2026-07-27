import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiantis-ot');
}

export default function RealMapTibiantisOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiantis-ot" />;
}
