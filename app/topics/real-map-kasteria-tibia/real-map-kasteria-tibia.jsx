import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-kasteria-tibia');
}

export default function RealMapKasteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-kasteria-tibia" />;
}
