import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-13-seasonal-server');
}

export default function RookgaardTales13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-13-seasonal-server" />;
}
