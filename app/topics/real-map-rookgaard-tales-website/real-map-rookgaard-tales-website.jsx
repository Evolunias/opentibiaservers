import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rookgaard-tales-website');
}

export default function RealMapRookgaardTalesWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-rookgaard-tales-website" />;
}
