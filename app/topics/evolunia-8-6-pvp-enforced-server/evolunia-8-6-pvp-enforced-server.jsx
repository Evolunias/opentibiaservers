import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-6-pvp-enforced-server');
}

export default function Evolunia86PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-6-pvp-enforced-server" />;
}
