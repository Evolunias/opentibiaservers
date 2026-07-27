import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-non-pvp-server-latin-america');
}

export default function RookgaardTalesNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-non-pvp-server-latin-america" />;
}
