import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvp-enforced-server-brazil');
}

export default function CoxaotPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvp-enforced-server-brazil" />;
}
