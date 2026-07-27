import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvp-enforced-server-south-america');
}

export default function CoxaotPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvp-enforced-server-south-america" />;
}
