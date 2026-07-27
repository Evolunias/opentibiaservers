import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvp-enforced-server-germany');
}

export default function EvoluniaPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvp-enforced-server-germany" />;
}
