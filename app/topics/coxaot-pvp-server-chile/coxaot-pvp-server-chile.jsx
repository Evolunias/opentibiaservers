import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvp-server-chile');
}

export default function CoxaotPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvp-server-chile" />;
}
