import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rookgaard-tales-open-tibia');
}

export default function RealMapRookgaardTalesOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-rookgaard-tales-open-tibia" />;
}
