import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-11-seasonal-server');
}

export default function RookgaardTales11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-11-seasonal-server" />;
}
