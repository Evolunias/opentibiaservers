import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nilot-tibia');
}

export default function RealMapNilotTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-nilot-tibia" />;
}
