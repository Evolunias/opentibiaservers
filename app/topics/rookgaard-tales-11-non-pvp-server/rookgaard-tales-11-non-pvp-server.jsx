import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-11-non-pvp-server');
}

export default function RookgaardTales11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-11-non-pvp-server" />;
}
