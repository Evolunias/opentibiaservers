import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-non-pvp-server-chile');
}

export default function CoxaotNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="coxaot-non-pvp-server-chile" />;
}
