import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-1-pvp-enforced-server');
}

export default function Evolunia81PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-1-pvp-enforced-server" />;
}
