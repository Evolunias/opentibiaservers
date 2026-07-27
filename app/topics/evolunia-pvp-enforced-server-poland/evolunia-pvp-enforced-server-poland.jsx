import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvp-enforced-server-poland');
}

export default function EvoluniaPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvp-enforced-server-poland" />;
}
