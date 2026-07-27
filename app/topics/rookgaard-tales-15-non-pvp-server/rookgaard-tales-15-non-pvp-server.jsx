import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-15-non-pvp-server');
}

export default function RookgaardTales15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-15-non-pvp-server" />;
}
