import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiame-tibia');
}

export default function RealMapTibiameTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiame-tibia" />;
}
