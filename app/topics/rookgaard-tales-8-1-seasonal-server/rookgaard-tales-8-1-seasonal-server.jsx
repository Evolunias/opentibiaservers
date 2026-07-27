import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-1-seasonal-server');
}

export default function RookgaardTales81SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-1-seasonal-server" />;
}
