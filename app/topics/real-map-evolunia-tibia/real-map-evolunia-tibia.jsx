import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolunia-tibia');
}

export default function RealMapEvoluniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolunia-tibia" />;
}
