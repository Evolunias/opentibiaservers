import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-10-0-pvp-enforced-server');
}

export default function Evolunia100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-10-0-pvp-enforced-server" />;
}
