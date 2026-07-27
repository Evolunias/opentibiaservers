import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-seasonal-server-north-america');
}

export default function RookgaardTalesSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-seasonal-server-north-america" />;
}
