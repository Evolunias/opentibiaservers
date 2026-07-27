import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvp-enforced-server-north-america');
}

export default function CoxaotPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvp-enforced-server-north-america" />;
}
