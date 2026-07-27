import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-11-pvp-enforced-server');
}

export default function Coxaot11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-11-pvp-enforced-server" />;
}
