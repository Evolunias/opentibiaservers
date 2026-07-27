import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-9-6-pvp-enforced-server');
}

export default function Evolunia96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-9-6-pvp-enforced-server" />;
}
