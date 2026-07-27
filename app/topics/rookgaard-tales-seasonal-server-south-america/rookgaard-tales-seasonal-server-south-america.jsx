import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-seasonal-server-south-america');
}

export default function RookgaardTalesSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-seasonal-server-south-america" />;
}
