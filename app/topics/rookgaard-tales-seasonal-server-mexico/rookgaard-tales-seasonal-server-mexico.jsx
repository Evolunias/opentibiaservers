import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-seasonal-server-mexico');
}

export default function RookgaardTalesSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-seasonal-server-mexico" />;
}
