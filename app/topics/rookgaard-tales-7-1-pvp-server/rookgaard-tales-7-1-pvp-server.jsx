import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-7-1-pvp-server');
}

export default function RookgaardTales71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-7-1-pvp-server" />;
}
