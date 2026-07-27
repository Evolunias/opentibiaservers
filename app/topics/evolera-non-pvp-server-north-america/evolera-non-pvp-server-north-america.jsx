import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-non-pvp-server-north-america');
}

export default function EvoleraNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-non-pvp-server-north-america" />;
}
