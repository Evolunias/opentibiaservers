import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-non-pvp-server-canada');
}

export default function RookgaardTalesNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-non-pvp-server-canada" />;
}
