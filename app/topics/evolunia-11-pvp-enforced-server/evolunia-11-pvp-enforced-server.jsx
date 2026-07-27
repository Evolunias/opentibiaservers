import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-11-pvp-enforced-server');
}

export default function Evolunia11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-11-pvp-enforced-server" />;
}
