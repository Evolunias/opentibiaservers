import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-non-pvp-server-usa');
}

export default function EvoleraNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evolera-non-pvp-server-usa" />;
}
