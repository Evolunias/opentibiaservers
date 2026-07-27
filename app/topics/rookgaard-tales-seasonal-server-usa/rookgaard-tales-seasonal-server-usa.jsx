import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-seasonal-server-usa');
}

export default function RookgaardTalesSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-seasonal-server-usa" />;
}
