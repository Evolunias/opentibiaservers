import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-7-4-pvp-server');
}

export default function RookgaardTales74PvpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-7-4-pvp-server" />;
}
