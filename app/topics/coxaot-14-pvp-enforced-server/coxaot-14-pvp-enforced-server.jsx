import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-14-pvp-enforced-server');
}

export default function Coxaot14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-14-pvp-enforced-server" />;
}
