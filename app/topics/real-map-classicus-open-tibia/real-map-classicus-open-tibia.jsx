import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classicus-open-tibia');
}

export default function RealMapClassicusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-classicus-open-tibia" />;
}
