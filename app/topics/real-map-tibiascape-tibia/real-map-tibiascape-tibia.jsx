import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiascape-tibia');
}

export default function RealMapTibiascapeTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiascape-tibia" />;
}
