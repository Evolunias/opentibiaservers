import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-7-6-seasonal-server');
}

export default function RookgaardTales76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-7-6-seasonal-server" />;
}
