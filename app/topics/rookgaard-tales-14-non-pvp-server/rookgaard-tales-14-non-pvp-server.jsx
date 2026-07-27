import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-14-non-pvp-server');
}

export default function RookgaardTales14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-14-non-pvp-server" />;
}
