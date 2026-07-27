import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiantis-ot-server');
}

export default function RealMapTibiantisOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiantis-ot-server" />;
}
