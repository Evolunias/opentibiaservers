import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-non-pvp-server-mexico');
}

export default function EvoleraNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolera-non-pvp-server-mexico" />;
}
