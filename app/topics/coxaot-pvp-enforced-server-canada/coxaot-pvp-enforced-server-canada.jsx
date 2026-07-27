import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvp-enforced-server-canada');
}

export default function CoxaotPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvp-enforced-server-canada" />;
}
