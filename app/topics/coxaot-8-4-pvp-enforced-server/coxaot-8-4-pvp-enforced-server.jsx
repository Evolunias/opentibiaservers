import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-4-pvp-enforced-server');
}

export default function Coxaot84PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-4-pvp-enforced-server" />;
}
