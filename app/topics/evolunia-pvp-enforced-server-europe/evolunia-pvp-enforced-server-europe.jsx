import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvp-enforced-server-europe');
}

export default function EvoluniaPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvp-enforced-server-europe" />;
}
