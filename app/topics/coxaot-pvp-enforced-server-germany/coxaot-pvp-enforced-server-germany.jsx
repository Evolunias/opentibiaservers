import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvp-enforced-server-germany');
}

export default function CoxaotPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvp-enforced-server-germany" />;
}
