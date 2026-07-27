import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classicus-tibia');
}

export default function RealMapClassicusTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-classicus-tibia" />;
}
