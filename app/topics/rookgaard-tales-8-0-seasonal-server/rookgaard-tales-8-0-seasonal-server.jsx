import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-0-seasonal-server');
}

export default function RookgaardTales80SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-0-seasonal-server" />;
}
