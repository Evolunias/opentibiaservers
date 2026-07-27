import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-custom-map-servers-france');
}

export default function RookgaardTalesCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-custom-map-servers-france" />;
}
