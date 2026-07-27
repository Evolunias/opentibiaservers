import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-shadowcores-tibia');
}

export default function RealMapShadowcoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-shadowcores-tibia" />;
}
