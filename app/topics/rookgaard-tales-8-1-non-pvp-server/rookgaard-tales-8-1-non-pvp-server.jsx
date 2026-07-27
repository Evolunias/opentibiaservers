import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-1-non-pvp-server');
}

export default function RookgaardTales81NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-1-non-pvp-server" />;
}
