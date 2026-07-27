import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-seasonal-server-brazil');
}

export default function RookgaardTalesSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-seasonal-server-brazil" />;
}
