import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-9-6-pvp-enforced-server');
}

export default function Coxaot96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-9-6-pvp-enforced-server" />;
}
