import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-real-map-server-france');
}

export default function RookgaardTalesRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-real-map-server-france" />;
}
