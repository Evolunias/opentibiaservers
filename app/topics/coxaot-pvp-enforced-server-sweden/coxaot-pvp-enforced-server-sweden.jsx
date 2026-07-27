import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvp-enforced-server-sweden');
}

export default function CoxaotPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvp-enforced-server-sweden" />;
}
