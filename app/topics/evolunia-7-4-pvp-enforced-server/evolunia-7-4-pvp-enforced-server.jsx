import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-4-pvp-enforced-server');
}

export default function Evolunia74PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-4-pvp-enforced-server" />;
}
