import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibianus-tibia');
}

export default function RealMapTibianusTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibianus-tibia" />;
}
