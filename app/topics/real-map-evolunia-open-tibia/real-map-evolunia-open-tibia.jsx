import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolunia-open-tibia');
}

export default function RealMapEvoluniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolunia-open-tibia" />;
}
