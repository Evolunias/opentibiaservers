import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thornia-open-tibia');
}

export default function RealMapThorniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-thornia-open-tibia" />;
}
