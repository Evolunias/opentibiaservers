import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-1-pvp-server');
}

export default function RookgaardTales81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-1-pvp-server" />;
}
