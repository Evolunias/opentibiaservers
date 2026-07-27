import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-6-pvp-enforced-server');
}

export default function Evolunia76PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-6-pvp-enforced-server" />;
}
