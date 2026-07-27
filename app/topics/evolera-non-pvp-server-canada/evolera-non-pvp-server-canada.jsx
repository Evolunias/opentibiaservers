import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-non-pvp-server-canada');
}

export default function EvoleraNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolera-non-pvp-server-canada" />;
}
