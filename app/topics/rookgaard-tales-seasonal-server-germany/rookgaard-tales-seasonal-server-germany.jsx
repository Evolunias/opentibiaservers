import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-seasonal-server-germany');
}

export default function RookgaardTalesSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-seasonal-server-germany" />;
}
