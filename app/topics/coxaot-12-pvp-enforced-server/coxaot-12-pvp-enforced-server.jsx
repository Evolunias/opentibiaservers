import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-12-pvp-enforced-server');
}

export default function Coxaot12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-12-pvp-enforced-server" />;
}
