import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolera-tibia');
}

export default function RealMapEvoleraTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolera-tibia" />;
}
