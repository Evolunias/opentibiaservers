import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-15-pvp-server');
}

export default function RookgaardTales15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-15-pvp-server" />;
}
