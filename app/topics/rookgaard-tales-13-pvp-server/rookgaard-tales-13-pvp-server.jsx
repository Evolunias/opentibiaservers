import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-13-pvp-server');
}

export default function RookgaardTales13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-13-pvp-server" />;
}
