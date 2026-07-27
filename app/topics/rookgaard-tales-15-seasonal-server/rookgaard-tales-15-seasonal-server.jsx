import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-15-seasonal-server');
}

export default function RookgaardTales15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-15-seasonal-server" />;
}
