import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-14-pvp-enforced-server');
}

export default function Evolunia14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-14-pvp-enforced-server" />;
}
