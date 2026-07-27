import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-non-pvp-server-latin-america');
}

export default function ThorniaNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-non-pvp-server-latin-america" />;
}
