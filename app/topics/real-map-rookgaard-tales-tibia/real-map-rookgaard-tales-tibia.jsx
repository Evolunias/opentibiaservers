import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rookgaard-tales-tibia');
}

export default function RealMapRookgaardTalesTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-rookgaard-tales-tibia" />;
}
