import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-seasonal-server-latin-america');
}

export default function RookgaardTalesSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-seasonal-server-latin-america" />;
}
