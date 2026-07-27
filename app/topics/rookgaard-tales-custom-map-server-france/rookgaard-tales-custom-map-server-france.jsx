import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-custom-map-server-france');
}

export default function RookgaardTalesCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-custom-map-server-france" />;
}
