import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-seasonal-server-canada');
}

export default function RookgaardTalesSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-seasonal-server-canada" />;
}
