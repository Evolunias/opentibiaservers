import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-13-pvp-enforced-server');
}

export default function Evolunia13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-13-pvp-enforced-server" />;
}
