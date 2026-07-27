import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-non-pvp-server-europe');
}

export default function EvoleraNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolera-non-pvp-server-europe" />;
}
