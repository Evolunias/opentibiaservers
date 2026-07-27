import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvp-enforced-server-poland');
}

export default function CoxaotPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvp-enforced-server-poland" />;
}
