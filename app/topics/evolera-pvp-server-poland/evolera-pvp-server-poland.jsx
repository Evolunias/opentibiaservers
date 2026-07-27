import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvp-server-poland');
}

export default function EvoleraPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvp-server-poland" />;
}
