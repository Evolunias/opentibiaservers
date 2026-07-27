import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-10-0-pvp-server');
}

export default function RookgaardTales100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-10-0-pvp-server" />;
}
