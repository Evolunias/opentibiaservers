import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-14-seasonal-server');
}

export default function RookgaardTales14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-14-seasonal-server" />;
}
