import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nilot-open-tibia');
}

export default function RealMapNilotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-nilot-open-tibia" />;
}
