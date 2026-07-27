import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-real-map-servers-france');
}

export default function RookgaardTalesRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-real-map-servers-france" />;
}
