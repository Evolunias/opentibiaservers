import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiame-open-tibia');
}

export default function RealMapTibiameOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiame-open-tibia" />;
}
