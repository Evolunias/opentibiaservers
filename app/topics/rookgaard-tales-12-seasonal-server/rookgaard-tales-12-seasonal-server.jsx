import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-12-seasonal-server');
}

export default function RookgaardTales12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-12-seasonal-server" />;
}
