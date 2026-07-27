import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaorigins-open-tibia');
}

export default function RealMapTibiaoriginsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaorigins-open-tibia" />;
}
