import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-4-non-pvp-server');
}

export default function RookgaardTales84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-4-non-pvp-server" />;
}
