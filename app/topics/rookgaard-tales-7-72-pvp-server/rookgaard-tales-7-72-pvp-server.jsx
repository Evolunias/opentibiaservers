import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-7-72-pvp-server');
}

export default function RookgaardTales772PvpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-7-72-pvp-server" />;
}
