import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvp-server-canada');
}

export default function RookgaardTalesPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvp-server-canada" />;
}
