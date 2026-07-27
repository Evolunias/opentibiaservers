import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rookgaard-tales-official');
}

export default function RealMapRookgaardTalesOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-rookgaard-tales-official" />;
}
