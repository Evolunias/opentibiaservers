import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-non-pvp-server-poland');
}

export default function EvoleraNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolera-non-pvp-server-poland" />;
}
