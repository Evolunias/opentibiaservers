import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-12-non-pvp-server');
}

export default function RookgaardTales12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-12-non-pvp-server" />;
}
