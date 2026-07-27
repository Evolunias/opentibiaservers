import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvp-enforced-server-argentina');
}

export default function CoxaotPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvp-enforced-server-argentina" />;
}
