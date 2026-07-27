import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-seasonal-server-sweden');
}

export default function RookgaardTalesSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-seasonal-server-sweden" />;
}
