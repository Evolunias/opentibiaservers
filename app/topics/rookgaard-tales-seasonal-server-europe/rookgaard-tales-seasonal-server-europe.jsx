import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-seasonal-server-europe');
}

export default function RookgaardTalesSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-seasonal-server-europe" />;
}
