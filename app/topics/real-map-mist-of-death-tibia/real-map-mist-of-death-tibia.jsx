import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-mist-of-death-tibia');
}

export default function RealMapMistOfDeathTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-mist-of-death-tibia" />;
}
