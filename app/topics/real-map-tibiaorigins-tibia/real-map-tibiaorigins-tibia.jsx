import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaorigins-tibia');
}

export default function RealMapTibiaoriginsTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaorigins-tibia" />;
}
