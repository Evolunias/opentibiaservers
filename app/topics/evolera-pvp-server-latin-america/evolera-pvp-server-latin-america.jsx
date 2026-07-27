import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvp-server-latin-america');
}

export default function EvoleraPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvp-server-latin-america" />;
}
