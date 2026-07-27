import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvp-enforced-server-uk');
}

export default function EvoluniaPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvp-enforced-server-uk" />;
}
