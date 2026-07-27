import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-no-reset-server-chile');
}

export default function CoxaotNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="coxaot-no-reset-server-chile" />;
}
