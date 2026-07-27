import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvp-enforced-server-usa');
}

export default function CoxaotPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvp-enforced-server-usa" />;
}
