import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvp-enforced-server-europe');
}

export default function CoxaotPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvp-enforced-server-europe" />;
}
