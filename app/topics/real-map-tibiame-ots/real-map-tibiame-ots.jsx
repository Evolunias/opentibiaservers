import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiame-ots');
}

export default function RealMapTibiameOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiame-ots" />;
}
