import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvp-server-latin-america');
}

export default function RookgaardTalesPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvp-server-latin-america" />;
}
