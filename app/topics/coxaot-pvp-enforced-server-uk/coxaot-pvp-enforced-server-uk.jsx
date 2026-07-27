import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvp-enforced-server-uk');
}

export default function CoxaotPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvp-enforced-server-uk" />;
}
