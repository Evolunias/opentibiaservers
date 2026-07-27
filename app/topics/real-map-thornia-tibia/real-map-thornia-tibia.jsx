import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thornia-tibia');
}

export default function RealMapThorniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-thornia-tibia" />;
}
