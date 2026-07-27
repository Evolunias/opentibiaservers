import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvp-enforced-server-europe');
}

export default function EvoleraPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvp-enforced-server-europe" />;
}
