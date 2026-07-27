import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-9-6-seasonal-server');
}

export default function RookgaardTales96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-9-6-seasonal-server" />;
}
