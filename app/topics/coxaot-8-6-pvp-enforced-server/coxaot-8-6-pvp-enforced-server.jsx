import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-6-pvp-enforced-server');
}

export default function Coxaot86PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-6-pvp-enforced-server" />;
}
