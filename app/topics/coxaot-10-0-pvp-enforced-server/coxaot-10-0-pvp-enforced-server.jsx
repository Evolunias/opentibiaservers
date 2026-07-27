import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-10-0-pvp-enforced-server');
}

export default function Coxaot100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-10-0-pvp-enforced-server" />;
}
