import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-10-0-non-pvp-server');
}

export default function RookgaardTales100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-10-0-non-pvp-server" />;
}
