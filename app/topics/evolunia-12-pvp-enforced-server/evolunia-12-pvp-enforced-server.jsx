import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-12-pvp-enforced-server');
}

export default function Evolunia12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-12-pvp-enforced-server" />;
}
