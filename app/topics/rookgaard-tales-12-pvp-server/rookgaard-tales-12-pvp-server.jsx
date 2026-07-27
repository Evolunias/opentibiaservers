import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-12-pvp-server');
}

export default function RookgaardTales12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-12-pvp-server" />;
}
