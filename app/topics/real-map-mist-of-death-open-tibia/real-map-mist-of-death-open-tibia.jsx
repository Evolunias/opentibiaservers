import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-mist-of-death-open-tibia');
}

export default function RealMapMistOfDeathOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-mist-of-death-open-tibia" />;
}
