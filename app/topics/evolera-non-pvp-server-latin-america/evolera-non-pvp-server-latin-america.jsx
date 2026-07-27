import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-non-pvp-server-latin-america');
}

export default function EvoleraNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-non-pvp-server-latin-america" />;
}
