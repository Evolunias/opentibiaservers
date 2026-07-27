import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-seasonal-server-uk');
}

export default function RookgaardTalesSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-seasonal-server-uk" />;
}
