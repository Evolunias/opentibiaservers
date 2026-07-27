import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-15-pvp-enforced-server');
}

export default function Evolunia15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-15-pvp-enforced-server" />;
}
