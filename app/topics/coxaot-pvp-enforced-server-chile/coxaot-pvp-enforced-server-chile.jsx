import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvp-enforced-server-chile');
}

export default function CoxaotPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvp-enforced-server-chile" />;
}
