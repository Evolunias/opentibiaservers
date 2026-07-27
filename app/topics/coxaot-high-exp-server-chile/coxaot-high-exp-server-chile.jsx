import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-high-exp-server-chile');
}

export default function CoxaotHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="coxaot-high-exp-server-chile" />;
}
