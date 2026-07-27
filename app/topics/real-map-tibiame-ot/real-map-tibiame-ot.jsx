import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiame-ot');
}

export default function RealMapTibiameOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiame-ot" />;
}
